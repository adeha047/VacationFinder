import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import bunny from "../images/bunny.gif";

function Home() {
    return (
        <>
          <div className = "home">
            <ReactTypingEffect
                text="Hey Everyone!, Come Join Us On Our Adventure 
                To Find The Perfect Vacation With Us" 
            />
           </div> 
            <img src={bunny} alt="bunny" />
        </>
    )
}

export default Home;
