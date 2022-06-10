const axios = require('axios').default;

const baseUrl = 'https://api.spacexdata.com/';
let helper = {};

helper.getApi = async (params={}, url) => {
    return await axios.get(url, { params })
}

export {
    helper,
    baseUrl
}