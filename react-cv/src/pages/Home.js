import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>DEVELOPPEUR Junior</h1>
                    <h2>Web et Web Mobile</h2>
                    <div className="pdf">
                        <a href="./media/DeveloppeurWeb-Yildiz.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;