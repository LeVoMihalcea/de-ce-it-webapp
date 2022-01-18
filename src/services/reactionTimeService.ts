const axios = require('axios');

export async function fetchReactionTimes() {
    const response = await axios.get('/users/reaction');
    return response.data;
}
