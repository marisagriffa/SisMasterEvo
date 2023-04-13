const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get('/', (req, res) => {
    res.send('Hello world. Links greets you ')
});

router.get('/add', (req, res) => {
    //res.send('Form');
    res.render('links/add');
})

module.exports = router;