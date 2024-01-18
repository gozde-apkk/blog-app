
const User = require('../models/userModels');
const jwt = require("jsonwebtoken");
const authMiddleware = async ( req, res , next) => {
    const Authorization = req.headers.Authorization || req.headers.authorization

    if(Authorization && Authorization.startsWith('Bearer')){
        const token = Authorization.split(' ')[1]
        jwt.verify(token , process.env.JWT_SECRET, (err, info) => {
            if(err){
                return res.status(403).json({message : 'Invalid token'});
            }
            req.user = info
            next()
        })
    }else {
        return next();
    }
}


const protect = (async (req, res, next) => {
    try {
        const token = req.cookies.access_token
        console.log(`token: ${token}`)
        if(!token) {
            res.status(404)
            throw new Error("Not authorized, please login");
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne(verified.id).select("-password");   
       console.log("user" , user);
        if (!user) return res.status(400).send("Wrong user");
        if(!user) {
            res.status(401)
            throw new Error("User not found")
        }
        req.user = user 
        next();
    }catch (e) {
        res.status(401);
        throw new Error("Not authorized, please login")
    }
})
module.exports= {authMiddleware, protect};