const api = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');

const util = require('util');
const readFromFile = util.promisify(fs.readFile);




    //GET
    api.get('/notes', (req, res) => {
        readFromFile('./db/db.json')
        .then((data) => {
            res.json(JSON.parse(data))
        })
    });

    //POST
    api.post('/notes', (req, res) => {
        console.log(req.body);

        const { title, text } = req.body;

        if (req.body) {
            const addNote = {
                title,
                text,
                id: uuid.v4()
            };
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                const parsedData = JSON.parse(data);
                parsedData.push(addNote);
                fs.writeFile('./db/db.json', JSON.stringify(parsedData), (err) => {
                    if(err) {
                        console.log(err)
                    } else {
                        console.log('Notes Created!')
                    }
                })
            }
        })
        }
    });

    //DELETE
    api.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        fs.readFile('./db/db.json', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                let db = JSON.parse(data);
                const filter = db.filter(values => values.id != id);

                fs.writeFile('./db/db.json', JSON.stringify(filter), 'utf8', (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('Deleted!')
                        res.end();
                    }
                })
            }
        })
    });


module.exports = api;