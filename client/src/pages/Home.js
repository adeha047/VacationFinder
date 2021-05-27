import React from 'react';
// import ReactTypingEffect from 'react-typing-effect';
import Typewriter from "typewriter-effect";
import bunny from "../images/bunny.gif";
import Logout from './Logout';

function Home() {
    return (
        <>
            <div class="home">
                <Typewriter
                // delays and looping
                options = {{
                    loop:true,
                    delay: 100
                }}
                onInit = {(typewriter) => {
                 
                    typewriter
                        .typeString("Hey Everyone!")
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