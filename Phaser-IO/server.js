"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    console.log(req.url);
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map