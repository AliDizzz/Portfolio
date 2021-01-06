import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Course à pied</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-futbol"></i>
                    <span>Football</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-laptop-code"></i>
                    <span>Coder</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-dumbbell"></i>
                    <span>Musculation</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-rocket"></i>
                    <span>Espace</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;