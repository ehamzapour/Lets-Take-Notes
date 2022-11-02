const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

//Route files
const api = require('./routes/api');
const html = require('./routes/htmlroutes');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use('/api', api);
app.use('/', html);

//App listener
app.listen(PORT, () => {
    console.log(`Open server at http//localhost:${PORT}`)
});