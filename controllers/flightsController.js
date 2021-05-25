const axios = require('axios');

function getflights(place) {

  
  const options = {
    method: 'GET',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
    params: {query: place },
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

module.exports = {getflights}

  

// const options = {
//   method: 'GET',
//   url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
//   params: {query: 'Stockholm'},
//   headers: {
//     'x-rapidapi-key': '73e5ddad83mshf98d7f42e0a2850p162f34jsn880466fd5003',
//     'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

  

