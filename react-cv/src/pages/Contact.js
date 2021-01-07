import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Saint-Maur-Des-Fosses</span>
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <CopyToClipboard text="0773484244">
                                <span 
                                    className="clickInput"
                                    onClick={() => { alert('Téléphone bien copié !');}}
                                >
                                    07 73 48 42 44 
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;