const URL_BASE = 'http://localhost:3000';

const get = async (url) => {
    const response = await fetch(`${URL_BASE}${url}`);
    const json = await response.json();
    return json;
};

const post = async (url, payload, options) => {
    const response = await fetch(`${URL_BASE}${url}`, {
        method: 'POST',
        ...options,
        body: JSON.stringify(payload),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    return json;
};

export { get, post };
