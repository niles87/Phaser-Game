import { Response, Request } from 'express';

const express = require('express');
const exhbrs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', exhbrs());
app.set('view engine', 'handlebars');


app.get('/', (req: Request, res: Response) => {
    console.log(req.url);
    res.render('home');
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
})

