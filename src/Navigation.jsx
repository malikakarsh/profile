import React from 'react';
import './index.css';

function Navigation(){
    return (
        <header>
            <div id="nav_bar">
                <h1>About me</h1>
                <ul id="nav_ul">
                    <a href="#"><li>About me</li></a>
                    <a href="#"><li>Skills</li></a>
                    <a href="#"><li>Projects</li></a>
                    <a href="#"><li>Achievements</li></a>
                </ul>
            </div>
        </header>
    )
}

export default Navigation;