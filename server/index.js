const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.set('view engine', "ejs");

app.get('/', (req, res)=>{
    res.render('app');
});

app.get('/users/register', (req, res)=>{
    res.render('register');
});

app.get('/users/login', (req, res)=>{
    res.render('login');
});

app.get('/users/dashboard', (req, res)=>{
    res.render("dashboard", { user: "Mate" });
});

app.listen(PORT, ()=>{
    console.log(PORT);
})