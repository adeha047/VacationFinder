import React from 'react';
import Animation from "../images/fun.gif";

function About() {
    return (
        <>
            <h2>ABOUT</h2>
            <div className="Card">
                <p>
                    Welcome to our about page for our Vacation Finder Application.

                    <br></br>
                    <br></br>
                    This application is our first development of it's kind, which has allowed us to experiment freely without limitations to collect data on finding the best ways possible to supply our loyal customers with their dream vacation experience.
                    <br></br>
                    <br></br>
                    Choose from our vast list of sunny get a ways to cold retreats, our application will help you find the most suitable, exciting or eye opening vacation for you.

                    We supply details not only on the location, but on the food, beverages, hospitality and facts regarding the surrounding communities, for those who want to venture a little deeper into another culture.

                    This along side our easy-to-use, user interface will allow you to browse freely, as well as get the support you need.

                    Open your wings and experience the globe.
                </p>
                <img src={Animation} alt="animation" />
            </div>
        </>
    )
}

export default About;