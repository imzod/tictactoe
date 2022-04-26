const express = require('express');
const ejsMate = require('ejs-mate');
const path = require("path");
const ExpressError = require("./utils/ExpressError");
const bodyParser = require("body-parser");
const {dbSelect} = require("./controllers/dbSelect");


const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('start');
});

app.get('/game', (req, res) => {
    res.render('game')
});

app.post('/game', (req, res) => {
    const body = req.body;
    res.render('game', {body});
});

app.post("/db", async (req, res) => {
    dbSelect(req, res);
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page not found', 404))
});

/*app.use((err, req, res, next) => {
    const {statusCode = 500} = err;
    if (!err.message) err.message = 'Oh no, ERROR!!';
    res.status(statusCode).render('error', {err});
})*/

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})