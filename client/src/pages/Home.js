import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Animation from "../images/fun.gif";

function Home() {
    return (
        <>
            <ReactTypingEffect
                text="Hey Everyone!, Come Join Us On Our Adventure 
                To Find The Vacation With Us" 
            />
            <img src={Animation} alt="animation" />

        </>
    )
}

export default Home;
