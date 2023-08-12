const mongoose = require('mongoose');
const adminschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    page:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
})
const table=mongoose.model('admin',adminschema);
module.exports=table;