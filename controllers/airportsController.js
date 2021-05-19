const axios = require('axios');

function getairports() {
  
const params = {
  access_key: 'f8eb8443250915180bc05d7229510863', 
  limit: '10',
  
}

return axios.get('http://api.aviationstack.com/v1/airports', {params})
  
}

module.exports = {getairports}