const html = require('express').Router();
const path = require('path');

module.exports = (app) => {

    //Get route for notes.html file
    app.get('/notes', (req, res) => {
        res.sendFile(path.json(__dirname, '../public/notes.html'))
    });

    //Get * return index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.json(__dirname, '../public/index.html'))
    });

};