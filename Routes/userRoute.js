// const router = require('express').Router();
const express = require('express');
const app = express();
const userModel = require('../Models/userModel');
app.use(express.json());

app.post('/register', async(req, res, next) => {
    // res.send("Register route.");

    try {
    
        let userDetail = req.body;
        let response = await userModel.insertMany([userDetail]);

        // req.body.parents.forEach(ele => {
        //     ele.empId = response[0]._id;
        // });

        // let result = await parentModel.insertMany(req.body.parents);
        // await userModel.updateOne({ _id: response[0]._id }, { $push: { parentsId: [result[0]._id, result[1]._id] } })
        res.json(response);

    } catch (error) {
        res.json(error);
    }

});

app.post('/userLogin', (req, res, next) => {
    res.send("User login route.")
});

app.post('/createBook', (req, res, next) => {
    res.send("CreateBook route.")
});

app.post('/createComment', (req, res, next) => {
    res.send("Create comment route.")
});

app.get('/viewPosts', (req, res, next) => {
    res.send("View posts route.");
});


module.exports = app;