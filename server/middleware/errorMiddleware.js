const notFound = (req,res, next) => {
    const error = new Error(`Not found- ${req.orijinalUrl}`)
    res.status(404);
    next(error);
}


const errorMiddleware = (error, req,res,next) => {
    if(res.headerSent){
        return next(error);
    }

    res.status(error.code || 500).json({message : error.message || 'An unknow error'})
}


module.exports = {notFound, errorMiddleware}