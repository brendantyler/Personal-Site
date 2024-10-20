import React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Svg() {
    //useEffect(() => {
    //    window.addEventListener("scroll", e => console.log(e.));
    //}, []);

    return (
        <div id="textSvg">
            <svg viewBox="0 0 250 100">
                <path id="textPath" fill="none" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68" ></path>
                <text className="svgText nova">
                    {
                        [...Array(5)].map((_, i) => {
                            return <textPath className="svgText text(2) uppercase" href="#textPath" startOffset={`${(i * 22) - 2}%`}>Check out my socials</textPath>
                        })
                    }
                </text>
            </svg>
            <div className="links">
                <div>
                    <FontAwesomeIcon className="LinkedIn Icon" icon={faLinkedin} />
                    <p>LinkedIn</p>
                </div>
                <div>
                    <FontAwesomeIcon className="Github Icon" icon={faGithub} />
                    <p>Github</p>
                </div>
            </div>
        </div>
    )
}
