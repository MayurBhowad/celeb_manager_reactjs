const axios = require('axios');

const BASE_API = process.env.REACT_APP_BASE_URL || 'http://localhost:4001/api';

export const registerNewUser = (data) => {
    axios.post(`${BASE_API}/user/new`, data)
        .then(response => {
            console.log(response.data);
        });
}