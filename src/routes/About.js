import React from 'react';
import './About.css';

function About(props){
    console.log(props);
    return (
        <div className="about_container">
            <span>
                "Freedom is the freedom to say that two plus two make foure
                if that is granted, all elsse follows"
            </span>
            <span>-Gerge oWELL, 1984</span>
            <span>now and</span>
        </div>
    );
}

export default About;