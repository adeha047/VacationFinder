import React, { useState, useEffect } from "react";
// http://localhost:3001/api/interests
function Questionaire() {
    const [interests, setInterests] = useState([]);
    function handleclick (i) {
        console.log(i);
        window.location.replace(`/locations?id=${i.interestID}`)
    }
    useEffect(() => {
        async function fetchInterests() {
            const request = await fetch("http://localhost:3001/api/interests", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(res => res.json())
                // .then(data => {
                //     console.log(data)
                // })
                .catch(err => err);
            console.log(request)

            setInterests(request.data);
            console.log(request)
            return true;
        };
        if (interests.length <= 0) {
            fetchInterests();
        };
    });
    return (
        <>
            <h2>Select Your Interest</h2>
            <div class = "Interest">
            <ul class = "question">
                {interests.map((i) => (
                    <li key={i.interestID}>
                        {i.interest}
                        <button type="button" className="btn btn-primary" style={{ marginRight: "25px" }} onClick={() => handleclick(i)}>Select</button>
                    </li>
                ))}
            </ul>
            </div>
        </>
    )
}
export default Questionaire;