import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fetch from 'node-fetch/lib';
import fs from 'fs';

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

const ALPHA_URL = 'https://www.alphavantage.co/query';
const ALPHA_API_KEY = 'Z148PPUT64PQ5Q3I';

const CLEARBIT_URL = 'https://autocomplete.clearbit.com/v1/companies/suggest?query=';

const SYMBOL_FIELD = '1. symbol';
const NAME_FIELD = '2. name';

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
                            savedCompany => savedCompany[SYMBOL_FIELD] === company[SYMBOL_FIELD]
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
        const isCompanyTrackedAlready = Boolean(companies.find(trackedCompany => trackedCompany[SYMBOL_FIELD] === company[SYMBOL_FIELD]));

        const newCompanies = isCompanyTrackedAlready ? companies : [...companies, company];

        fs.writeFileSync('./server/trackedCompanies.json', JSON.stringify(newCompanies));
        res.send(200);
    });
});

function requestAsync(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

function prepareSavedCompaniesResponse(savedCompanies, fetchedData) {
    return savedCompanies.map(
        (savedCompany) => {
            const apiLimitPlaceholder = 'apiLimitPlaceholder';
            const fetchedCompanyData = fetchedData.find(
                fetchedCompany => fetchedCompany
                && fetchedCompany[0]
                && fetchedCompany[0]['Global Quote']
                && fetchedCompany[0]['Global Quote']['01. symbol'] === savedCompany[SYMBOL_FIELD]
            );
            const companyData = fetchedCompanyData && fetchedCompanyData[0]['Global Quote'];
            const clearBitData = fetchedCompanyData && fetchedCompanyData[1][0];
            return {
                symbol: savedCompany[SYMBOL_FIELD],
                name: fetchedCompanyData ? savedCompany['2. name'] : apiLimitPlaceholder,
                website: fetchedCompanyData ? clearBitData.domain : apiLimitPlaceholder,
                logo: fetchedCompanyData ? clearBitData.logo : apiLimitPlaceholder,
                latestTradingDay: fetchedCompanyData ? companyData['07. latest trading day'] : apiLimitPlaceholder,
                change: fetchedCompanyData ? companyData['09. change'] : apiLimitPlaceholder,
                changePercent: fetchedCompanyData ? companyData['10. change percent'] : apiLimitPlaceholder,
                price: fetchedCompanyData ? companyData['05. price'] : apiLimitPlaceholder,
                currency: savedCompany['8. currency'],
                timezone: savedCompany['7. timezone'],
                region: savedCompany['4. region']
            };
        }
    );
}

app.get('/fetchSavedCompanies', (req, res) => {
    fs.readFile('./server/trackedCompanies.json', (err, data) => {
        if (err) {
            throw err;
        }

        const trackedCompanies = JSON.parse(data);
        const companiesWithNames = [];

        trackedCompanies.forEach(trackedCompany => companiesWithNames.push({ symbol: trackedCompany[SYMBOL_FIELD], name: trackedCompany[NAME_FIELD] }));


        Promise.all(companiesWithNames.map(
            company => Promise.all([
                requestAsync(`${ALPHA_URL}?function=GLOBAL_QUOTE&symbol=${company.symbol}&apikey=${ALPHA_API_KEY}`),
                requestAsync(`${CLEARBIT_URL}${company.name.split(' ')[0]}`)
            ])
        )).then(
            (companiesData) => {
                const companiesWithMatchedData = prepareSavedCompaniesResponse(trackedCompanies, companiesData);
                res.json(companiesWithMatchedData);
            }
        );
    });
});

app.post('/deleteCompany', (req, res) => {
    const {
        symbol
    } = req.body;

    fs.readFile('./server/trackedCompanies.json', (err, data) => {
        if (err) {
            throw err;
        }

        const companies = JSON.parse(data);

        const newCompanies = companies.filter(company => company[SYMBOL_FIELD] !== symbol);

        fs.writeFileSync('./server/trackedCompanies.json', JSON.stringify(newCompanies));
        res.send(200);
    });
});

app.get('/*', (req, res) => {
    res.sendFile('public/index.html', { root: path.dirname(__dirname) });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
