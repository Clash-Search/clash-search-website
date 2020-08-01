const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

const games = [
    {   
        "id": 0,
        "name": "Clash of Clans",
        "abbr": "coc",
        "platform": "Android and iOS",
        "company": "SuperCell"
    },{
        "id": 1,
        "name": "Clash Royale",
        "abbr": "cr",
        "platform": "Android and iOS",
        "company": "SuperCell"
    }
 ]

router.get('/', (req, res) => {
    res.json(games)
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)