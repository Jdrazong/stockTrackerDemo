import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fetch from 'node-fetch/lib';
import fs from 'fs';

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
            fs.readFile('./server/trackedCompanies.json', (err, trackedCompanies) => {
                if (err) {
                    throw err;
                }

                const savedCompanies = JSON.parse(trackedCompanies);
                const responseData = data.bestMatches.map(
                    (company) => {
                        return savedCompanies.find(
                            savedCompany => savedCompany['1. symbol'] === company['1. symbol']
                        ) ? { ...company, alreadyTracked: true } : company;
                    }
                );

                res.json(responseData);
            });
        })
        .catch((err) => {
            res.send(err);
        });
});

app.post('/trackCompany', (req, res) => {
    const {
        alreadyTracked,
        ...company
    } = req.body;

    fs.readFile('./server/trackedCompanies.json', (err, data) => {
        if (err) {
            throw err;
        }

        const companies = JSON.parse(data);
        const isCompanyTrackedAlready = Boolean(companies.find(trackedCompany => trackedCompany['1. symbol'] === company['1. symbol']));

        const newCompanies = isCompanyTrackedAlready ? companies : [...companies, company];

        fs.writeFileSync('./server/trackedCompanies.json', JSON.stringify(newCompanies));
    });
});

app.get('/*', (req, res) => {
    res.sendFile('public/index.html', { root: path.dirname(__dirname) });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
