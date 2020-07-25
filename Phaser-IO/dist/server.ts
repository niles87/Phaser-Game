import { Response, Request } from 'express';

const express = require('express');
const exhbrs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
const gameRoute = require('./routes/game')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

app.engine('handlebars', exhbrs());
app.set('view engine', 'handlebars');

app.use('/game', gameRoute)

app.get('/', (req: Request, res: Response) => {
    console.log(req.url);
    res.render('home');
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
})

