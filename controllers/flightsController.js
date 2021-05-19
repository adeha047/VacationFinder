const axios = require('axios');

function getflights() {
  
const params = {
  access_key: 'f8eb8443250915180bc05d7229510863', 
  limit: '10',
  flight_status: 'scheduled'
  
}

return axios.get('http://api.aviationstack.com/v1/flights', {params})
  
}

module.exports = {getflights}

  
  

