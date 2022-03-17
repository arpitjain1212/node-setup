import express from "express";
import { Router } from 'express';
const app = express();
const router = Router();
const PORT = 3000;
app.use(router);
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});
app.listen(PORT, () => {
    console.log('server has started on port: %d', PORT);
})