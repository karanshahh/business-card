import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Socials from "./Socials"
import React from 'react';

export default function Card() {
    return (
        <div className="card">
            <Info />
			<About />
			<Interests />
			<Socials />
        </div>
    )
}