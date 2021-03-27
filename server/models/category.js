const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: "name is required",
        minlength : [2, "too short"],
        maxlength : [32, "too long"],
        trim : true
    },
    slug:{
        type: String,
        lowerCase: true,
        unique: true,
        index: true
    },
    
    }, {timestamps: true})

module.exports = mongoose.model( 'Category', CategorySchema )