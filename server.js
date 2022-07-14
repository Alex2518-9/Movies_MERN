import express from 'express'; //middleware
import cors from 'cors'; // middleware
import movies from './api/movies.route.js'; // ez egy különálló file amit később hozunk létre a route-ok tárolására

//const express = require('express');
const app = express(); // server létrehozása

/* A Middleware olyan funkciók amiket az Express végrehajt miután bejött a request és mielőtt kimegy az output, req és resp-eken változtathatnak is. az express.json() lehetővé teszi a request-ből való adatkinyerést body tulajdonságon keresztül*/
app.use(cors()); // middleware csatolása
app.use(express.json()); // middleware csatolása, lehetővé teszi a server számára, hogy JSON-t tudjon olvasni a request's body-ból

/* A kezdeti route-ok beállítása */
app.use("/api/v1/movies", movies); // url felépítése: /api/version number/api neve
app.use('*', (req, res) => {
    res.status(404).json({ error: "not found" }); // ha valaki a nemlétező url-re menne, akkor írja ki az üzenetet a hibakóddal
})

export default app // exportáljuk mint module, hogy más file-ok hozzáférhessenek a serverhez