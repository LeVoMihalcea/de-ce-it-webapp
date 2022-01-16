const axios = require('axios');

export async function registerTeam(payload) {
    const response = await axios.post('/users', payload);
    return response.data;
}
