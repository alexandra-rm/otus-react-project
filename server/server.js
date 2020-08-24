import express from "express";

const app = express();
const PORT = 8000;


app.use("^/$", (req, res) => {
    res.send("Hello world!");
});

app.listen(PORT, () => {
    console.log(`SSR Server is started on ${PORT} port!`);
});