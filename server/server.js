import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticApp } from "../src/StaticApp.tsx";

const app = express();
const PORT = 8000;

app.use("^/$", (req, res) => {
    fs.readFile(path.resolve("dist/index.html"), "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Some error happened.");
        }
        return res.send(
            data.replace(
                '<div id="main"></div>',
                `<div id="main">${reactDOMServer.renderToString(
                    <StaticApp />
                )}</div>`
            )
        );
    });
    //res.send("Hello world!");
});

app.listen(PORT, () => {
    console.log(`SSR Server is started on ${PORT} port!`);
});
