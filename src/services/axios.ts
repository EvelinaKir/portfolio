const axios = require('axios');

export const instance = axios.create({
    baseURL: 'https://api.github.com/',
    firstMenus: {
        "Content-Type": "application/json",
      },
    });