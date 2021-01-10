import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Yildiz Ali</h1>
                    <h2>Développeur Junior<br></br>Web et Web Mobile</h2>
                    <div className="pdf">
                        <a href="./media/DeveloppeurWeb-Yildiz.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;