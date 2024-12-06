import React from 'react';
//import homepage.css

function Projects() {
    return (
        <section id="projectsSection">
            <h2 id="projectsTitle">Project Spotlight</h2>
            <div className="projectsContainer">
                <div className="project">
                    <aside className="projectSidebar">
                        <h3 className="projectName">Text Flight</h3>
                        <p className="projectDesc">A Typing Game that takes design inspiration from 2010 flash games capturing the "rushed" low-tech aesthetic. It uses local storage to save scores and took some research into looping the parallax background.</p>
                    </aside>
                    <div className="projectImagesScroll">
                        <div className="projectImages">
                            <img className="projectImage" src={`${process.env.PUBLIC_URL}/images/FlightTyper_Start.png`} alt="Start Menu for a speed typing game" />
                            <img className="projectImage" src={`${process.env.PUBLIC_URL}/images/FlightTyper_Active.png`} alt="Gameplay of speed typing game that depicts a plane and text box" />
                            <img className="projectImage" src={`${process.env.PUBLIC_URL}/images/FlightTyper_End.png`} alt="Game Over Menu for a speed typing game" />
                        </div>
                    </div>
                </div>
                <div className="project">
                    <aside className="projectSidebar">
                        <h3 className="projectName">Koin Financial Tracker</h3>
                        <p className="projectDesc">Koin is a simple Finance Application that keeps track of a users money, I will look to expand this project by adding predictive algorithms to help people budget and add graphing to better visualize data
                        </p>
                    </aside>
                    <div className="projectImagesScroll">
                        <div className="projectImages">
                            <img className="projectImage" src={`${process.env.PUBLIC_URL}/images/KoinMainLanding.png`} alt="Start Menu for a speed typing game" />
                            <img className="projectImage" src={`${process.env.PUBLIC_URL}/images/KoinFeatures.png`} alt="Gameplay of speed typing game that depicts a plane and text box" />
                            <img className="projectImage" src={`${process.env.PUBLIC_URL}/images/KoinDashMock.png`} alt="Game Over Menu for a speed typing game" />
                        </div>
                    </div>
                </div>
            {/*    <div className="project">*/}
            {/*        <aside className="projectSidebar">*/}
            {/*            <h3 className="projectName">Test Project 3</h3>*/}
            {/*            <p className="projectDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>*/}
            {/*        </aside>*/}
            {/*        <div className="projectImagesScroll">*/}
            {/*            <div className="projectImages">*/}
            {/*                <img className="projectImage" src={`${process.env.PUBLIC_URL}/images/FlightTyper_Start.png`} alt="Start Menu for a speed typing game" />*/}
            {/*                <img className="projectImage" src={`${process.env.PUBLIC_URL}/images/FlightTyper_Active.png`} alt="Gameplay of speed typing game that depicts a plane and text box" />*/}
            {/*                <img className="projectImage" src={`${process.env.PUBLIC_URL}/images/FlightTyper_End.png`} alt="Game Over Menu for a speed typing game" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            </div>
        </section >
    );
}

export default Projects;