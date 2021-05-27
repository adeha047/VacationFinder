import React, { useState, useEffect } from "react";
import axios from 'axios';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FaPlane} from "react-icons/fa";

// http://localhost:3001/api/interests
function Location() {
    const [locations, setLocations] = useState([]);
    const [flight, setFlight] = useState([]);
    const [currentLocation, setCurrentLocation] = useState("");
    const url = window.location.href;
    const interestID = url.split("=")[1]
    console.log(interestID)
    useEffect(() => {
        async function fetchLocations() {
            const request = await fetch("http://localhost:3001/api/locations", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(res => res.json())
                // .then(data => {
                //     console.log(data)
                // })
                .catch(err => err);
                const filteredLocations = request.data.filter(data => data.interestID === interestID)

            setLocations(filteredLocations);
            console.log(request)
            return true;
        };
        if (locations.length <= 0) {
            fetchLocations();
        };
    })

    async function getFlight(place) {
        const options = {
            method: 'GET',
            url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
            params: {query: place },
            headers: {
              'x-rapidapi-key': '73e5ddad83mshf98d7f42e0a2850p162f34jsn880466fd5003',
              'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
            }
          };
          
          const request = await axios.request(options).then(data => data);
          const firstThreePlaces = request.data.Places.filter((_,i) => i > 0 && i <=4);
          setFlight(firstThreePlaces)
          setCurrentLocation(place)

    }
    console.log(flight)

        return (
            <>
                <h2>Select Your City</h2>
                <div className = "Interest">
                <ul className = "ask">
                    {locations.map((i) => (
                        <li key={i._id}>
                            {i.location}  <button type="button" className="btn btn-primary" style={{ marginRight: "25px" }} onClick={() => getFlight(i.location)}><FaPlane/></button>    
                        </li>
                    ))}
                </ul>
                <div>
                    <h2 className = "place">Selected Destination</h2>
                    <h3> {currentLocation} </h3>
                    <h2 class = "airport">Airports</h2>
                    {flight.map((data) => (<p key={data.PlaceId}> {data.PlaceName}</p>))}
                </div>
                </div>
            </>
        )
}

export default Location;