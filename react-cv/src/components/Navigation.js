import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/billGates.jpg" alt="profil-pic"/>
                    <h3>Ali Yildiz</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <NavLink exact to="/" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span>Accueil</span>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;