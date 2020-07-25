import { Response, Request } from 'express';

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    console.log(req.url);
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
})

