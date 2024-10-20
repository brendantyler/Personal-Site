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
                            <img className="projectImage" src={`${process.env.PUBLIC_URL}/images/FlightTyper_Start.png`} alt="Project 1" />
                            <img className="projectImage" src={`${process.env.PUBLIC_URL}/images/FlightTyper_Active.png`} alt="Project 1" />
                            <img className="projectImage" src={`${process.env.PUBLIC_URL}/images/FlightTyper_End.png`} alt="Project 1" />
                        </div>
                    </div>
                </div>
                <div className="project">
                    <aside className="projectSidebar">
                        <h3 className="projectName">Test Project 2</h3>
                        <p className="projectDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </aside>
                    <div className="projectImagesScroll">
                        <div className="projectImages">
                            <img className="projectImage" src="https://via.placeholder.com/800" alt="Project 1" />
                            <img className="projectImage" src="https://via.placeholder.com/800" alt="Project 1" />
                            <img className="projectImage" src="https://via.placeholder.com/800" alt="Project 1" />
                        </div>
                    </div>
                </div>
                <div className="project">
                    <aside className="projectSidebar">
                        <h3 className="projectName">Test Project 3</h3>
                        <p className="projectDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </aside>
                    <div className="projectImagesScroll">
                        <div className="projectImages">
                            <img className="projectImage" src="https://via.placeholder.com/800" alt="Project 1" />
                            <img className="projectImage" src="https://via.placeholder.com/800" alt="Project 1" />
                            <img className="projectImage" src="https://via.placeholder.com/800" alt="Project 1" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Projects;