"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const exhbrs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
app.engine('handlebars', exhbrs());
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
    console.log(req.url);
    res.render('home');
});
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map