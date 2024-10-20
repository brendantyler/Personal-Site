import React from 'react';
import { ReactTyped } from 'react-typed'
export default function Introduction() {

    return (
        <section id="introSection">
            <div className="introContainer">
                <h1 id="SectionTitle">WELCOME</h1>
                <div className="introView">
                    <div>
                        I'm a full stack software developer with a passion for all things tech, and I'm always looking for new ways to
                        <ReactTyped className="typedText"
                            strings={[
                                "IMPROVE MY SKILLS",
                                "LEARN NEW THINGS",
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            backDelay={4000}
                            loop
                        />
                    </div>
                    {/*<section className="MoreSection">*/}
                    {/*<h1>Other Passions</h1>*/}
                    {/*    <div className="linksList">*/}
                    {/*        <a href="/" className="Link1">Games</a>*/}
                    {/*        <a href="/" className="Link2">Sports</a>*/}
                    {/*        <a href="/" className="Link3">Anime</a>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                </div>
            </div>
        </section>
    );
}
