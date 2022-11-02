const api = require('express').Router();
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');


module.exports = (app) => {

    //GET
    api.get('/notes', (req, res) =>{
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    //POST
    api.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);

        let userNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid.v4(),
        };

        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    });

    //DELETE
    api.delete('/api/notes/:id', (req, res) => {
        let db = JSON.parse(fs.readFileSync('db/db.json'))
        let filter = db.filter(item => item.id !== req.params.id);
        res.json(filter);
    })
};