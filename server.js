const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//Route files
const api = require('./routes/api');
const html = require('./routes/htmlroutes');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));
app.use(express.json());

//App listener
app.listen(PORT, () => {
    console.log(`Open server at http//localhost:${PORT}`)
});