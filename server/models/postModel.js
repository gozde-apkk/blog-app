const { Schema } = require("mongoose");



const postSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    category : {
        type : String,
        enum : ["Agricultere", "Business", "Education",
    "Enterainment",
    "Art", "Investment", "Uncategorized", "Weather"], message : "{VALUE iss not supported"
    },
    description :{
        type : String,
        required : true
    },
    creator : {
        type : Schema.Types.ObjectId, ref: "User"},
        title : {
            type : String,
            required : true
        }
},{timestamps:true})