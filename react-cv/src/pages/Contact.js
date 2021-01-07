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
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="yildiz.ali.s1990@gmail.com">
                                <span 
                                    className="clickInput"
                                    onClick={() => { alert('E-mail bien copié !');}}
                                >
                                    yildiz.ali.s1990@gmail.com 
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                    
                        <a href="https://www.google.com" target="_bank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                    
                    
                        <a href="https://www.google.com" target="_bank" rel="noopener noreferrer">
                            <h4>GitHub</h4>
                            <i className="fab fa-github"></i>
                        </a>
                    
                        <a href="https://www.google.com" target="_bank" rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>

                    
                        <a href="https://www.google.com" target="_bank" rel="noopener noreferrer">
                            <h4>CodePen</h4>
                            <i className="fab fa-codepen"></i>
                        </a>
                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;