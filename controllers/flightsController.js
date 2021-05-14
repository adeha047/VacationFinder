const axios = require('axios');

function getflights() {
  
const params = {
  access_key: 'f8eb8443250915180bc05d7229510863'
}

return axios.get('http://api.aviationstack.com/v1/flights', {params})
  // .then(response => {
  //   const apiResponse = response.data;
  //   if (Array.isArray(apiResponse['results'])) {
  //       apiResponse['results'].forEach(flight => {
  //           if (!flight['live']['is_ground']) {
  //               console.log(`${flight['airline']['name']} flight ${flight['flight']['iata']}`,
  //                   `from ${flight['departure']['airport']} (${flight['departure']['iata']})`,
  //                   `to ${flight['arrival']['airport']} (${flight['arrival']['iata']}) is in the air.`);
  //           }
  //       });
  //   }
  // }).catch(error => {
  //   console.log(error);
  // });
}

module.exports = {getflights}

  
  

