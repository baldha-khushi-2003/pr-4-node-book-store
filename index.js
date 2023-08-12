const express = require('express');
const port = 7000;
const app = express();
app.set('view engine', 'ejs');    
app.use(express.urlencoded());

const db = require('./config/mongoose');
const admintable = require('./models/admintbl');
app.get('/', (req, res) => {
    admintable.find({}).then((success) => {
        return res.render('form', {
            record: success
        })
    }).catch((err) => {
        console.log(err);
        return false;
    })
})  

app.get('/deletedata', (req, res) => {
    id = req.query.id;
    admintable.findByIdAndDelete(id).then((data) => {
        console.log("record successfully delete");
        return res.redirect('/');
    }).catch((err) => {
        console.log(err);
    })
})
app.get('/editdata', (req, res) => { 
     id = req.query.id;
    admintable.findById(id).then((data) => {
        return res.render('edit', {
             data
        });
    }).catch((err) => {
        console.log(err);
    })
})
app.post('/updatedata', (req, res) => {
    id = req.body.id;
    const { name, price, page, auther } = req.body;
    admintable.findByIdAndUpdate(id, {
        name: name,
        price:price,
        page:page,
        auther:auther,

    }).then((success) => {
        console.log("record is successfully update");
        return res.redirect('/');

    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.post('/formdata', (req, res) => {
    let editid = req.body.editid;
    const { name,price,page,auther} = req.body;
    admintable.create({
        name: name,
        price:price,
        page:page,
        auther:auther,
        
    }).then((success) => {
        console.log("record is successfully update");
        return res.redirect('back');

    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log("server not start");
        return false;
    }
    console.log("server is start on the port:-" + port);
})