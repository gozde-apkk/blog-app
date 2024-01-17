
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const upload = require('express-fileupload');
const userRoutes = require("./routes/userRouter");
const postRoutes = require("./routes/postRouter");
const { notFound, errorMiddleware } = require('./middleware/errorMiddleware');

const app = express();
app.use(cookieParser());
app.use(express.json({extended : true}))
app.use(express.urlencoded({extended : true}))
app.use(cors({credentials : true , origin: 'http://localhost:3000'}));
async function main() {
    await mongoose.connect('mongodb+srv://gozdeapak:157366@blog-app.xjj9yrd.mongodb.net/');
    console.log('MongoDB connected!');
  }
main();
app.use(upload())
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use(notFound);
app.use(errorMiddleware );


app.listen(5000, ()=>{
  console.log('Server is running on port 5000');

})