// const router = require('express').Router();
const express = require('express');
const app = express();
const userModel = require('../Models/userModel');
const bookModel = require('../Models/bookModel');
const commentModel = require('../Models/commentModel')
app.use(express.json());

app.post('/register', async(req, res, next) => {

    try {
    
        let userDetail = req.body;
        let response = await userModel.insertMany([userDetail]);
        res.json(response);

    } catch (error) {
        res.json(error);
    }

});

app.post('/userLogin', (req, res, next) => {
    res.send("User login route.")
});

app.post('/createBook', async(req, res, next) => {
    // res.send("CreateBook route.")
    try {
    
        let bookDetail = req.body;
        let response = await bookModel.insertMany([bookDetail]);
        res.json(response);

    } catch (error) {
        res.json(error);
    }
});

app.post('/createComment', async(req, res, next) => {
    // res.send("Create comment route.")
    try {
    
        let commentDetail = req.body;
        let response = await commentModel.insertMany([commentDetail]);
        res.json(response);

    } catch (error) {
        res.json(error);
    }
});

app.get('/viewPosts', (req, res, next) => {
    res.send("View posts route.");
});


module.exports = app;