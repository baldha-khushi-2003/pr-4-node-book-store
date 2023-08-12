const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/baldha');
const db = mongoose.connection;

db.on('connected',(err)=>{
    if(err){
        console.log('not run');
    }
    console.log('run');
})

module.exports = 'db';