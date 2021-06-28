import React, { Component } from 'react';
import ProgressBar from "./ProgressBar";

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:0.6},
            {id: 2, value: "Css", xp:0.6},
            {id: 3, value: "Php", xp:0.3},
            {id: 4, value: "Pyton", xp:0.1},
            {id: 4, value: "Swift UI", xp:0.2}
        ],
        frameworks: [
            {id: 1, value: "React", xp:0.6},
            {id: 1, value: "Symfony", xp:0.3},
            {id: 2, value: "Bootstrap", xp:0.6},
            {id: 2, value: "Tailwind", xp:0.2},
            {id: 3, value: "Sass", xp:0.2},
            {id: 4, value: "Material UI", xp:0.1}
        ]
    }


    render() {
        let {languages, frameworks} = this.state;  //Quand on va dire languages ou framework, ce sera l'equivalent de this.state.language
        
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                languages={languages}
                className="languagesDisplay"
                title="languages"
                />
                <ProgressBar
                languages={frameworks}
                className="frameworksDisplay"
                title="frameworks"
                />
            </div>
        );
    }
}

export default Languages;