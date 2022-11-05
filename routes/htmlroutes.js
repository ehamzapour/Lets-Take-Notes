const html = require('express').Router();
const path = require('path');



    //Get route for notes.html file
    html.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });

    //Get * return index.html file
    html.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

module.exports = html;