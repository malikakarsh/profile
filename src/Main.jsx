import React from 'react';
import './index.css';
import insta from './images/insta.png';
import linkedin from './images/link.png';
import twitter from './images/twitter.png';
import gmail from './images/gmg.png';
import prof from './images/profile.jpeg'

function Main(){
    return (
        <main id="main">
            <div id="flex_main">
                <div id="main1">
                    <img src={prof}></img>

                </div>
                <div id="main2">
                    <h1>Catch me on-</h1>
                    <a href="#"><img src={insta}></img></a>
                    <a href="#"><img src={linkedin}></img></a>
                    <a href="#"><img src={twitter}></img></a>
                    <a href="#"><img src={gmail}></img></a>
                </div>
            </div>
                <div id="main3">
                    
                    <p>Hi I am Akarsh Malik, presently a sophomore at NIT Tiruchirappalli pursuing Instrumentation and Control Engineering.
                    I am also a part of the <a href="#">Delta Force</a> as a system administrator.</p>

                    <h4>My hobbies include</h4>
                    <ul>
                        <li>Coding</li>
                        <li>Singing</li>
                        <li>Playing Guitar</li>
                    </ul>

                </div>
        </main>
    )
}

export default Main;