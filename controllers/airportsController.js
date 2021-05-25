const axios = require('axios');

function getairports() {
  
  const options = {
    method: 'GET',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/referral/v1.0/United%20States/USD/en-us/Paris/New%20York/anytime/%7Binboundpartialdate%7D',
    params: {shortapikey: 'ra66933236979928', apiKey: '{shortapikey}'},
    headers: {
      'x-rapidapi-key': '73e5ddad83mshf98d7f42e0a2850p162f34jsn880466fd5003',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
  };
  
  return axios.request(options).then(function (response) {
    return response.data
   }).catch(function (error) {
     return error;
   });
}

module.exports = {getairports}