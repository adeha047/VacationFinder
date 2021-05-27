import React from 'react';
// import ReactTypingEffect from 'react-typing-effect';
import Typewriter from "typewriter-effect";
import bunny from "../images/bunny.gif";

function Home() {
    return (
        <>
          <div class = "home">
            <Typewriter
                onInit = {(typewriter) => {
                    typewriter
                        .typeString("Hey Everyone!")
                        .pause(2000)
                        .deleteAll()
                        .typeString("Come Join Us On Our Adventure")
                        .deleteAll()
                        .typeString("To Find The Perfect Vacation With Us")
                        .deleteAll()
                        .start();
                }}
            />
           </div> 
            <img src={bunny} alt="bunny" />
        </>
    )
}

export default Home;