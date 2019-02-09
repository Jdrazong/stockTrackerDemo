import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fetch from 'node-fetch/lib';

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

const ALPHA_URL = 'https://www.alphavantage.co/query';
const ALPHA_API_KEY = 'asdfasdfasdf';

app.get('/fetchCompanies?:name', (req, res) => {
    const {
        name
    } = req.query;

    const apiUrl = `${ALPHA_URL}?function=SYMBOL_SEARCH&keywords=${name}&apikey=${ALPHA_API_KEY}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            res.json(data.bestMatches);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.get('/*', (req, res) => {
    res.sendFile('public/index.html', { root: path.dirname(__dirname) });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
