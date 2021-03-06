import React from 'react';

import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1 >Développeur</h1>
                    <h1>Junior</h1>
                    <h2>Web et Web Mobile</h2>
                    <div className="pdf">
                        <a href="./media/DeveloppeurWebYildiz.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;