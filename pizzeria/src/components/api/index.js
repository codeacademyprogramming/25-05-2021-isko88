import axios from 'axios';
let API_URL = 'https://isko88.github.io/apipizza.json';
export default async function callApi(method = 'GET', body) {
    try {
        return axios({
            method,
            url: `${API_URL}`,
            data: body
        });
    } catch (err) {
        console.log(err);
    }
}