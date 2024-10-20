import React from 'react';
import Projects from '../Pages/HomePage/Projects';
import SkillsBanner from './HomePage/SkillsBanner';
import Introduction from './HomePage/Introduction';
import HeroBanner from '../components/Spline/HeroBanner';
import Svg from '../components/svg';

import { Helmet } from 'react-helmet';
function HomePage() {
    return (
        <>
            <Helmet>
            <title>BG Portfolio | Home</title>
                <meta name="description" content="Portfolio of Brendan Galman a Full Stack Developer" />
            </Helmet>
            <section id="home-section">
                <HeroBanner/>
                <Introduction />
                <SkillsBanner />
                <Projects />
                <Svg/>
            </section>
        </>
    );
}

export default HomePage;