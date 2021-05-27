import React from 'react';
import axios from 'axios';


function FlightsTest() {

function getFlight(place) {
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
      
      console.log(response.data.Places[1].PlaceName);
      console.log(response.data.Places[2].PlaceName);
      console.log(response.data.Places[3].PlaceName);


//    return response.data
  }).catch(function (error) {
    return error;
  });
}
getFlight("New York")
  
    return (
        <div> </div>
    )
}

export default FlightsTest;