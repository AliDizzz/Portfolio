import React, { Component } from 'react'

export default class Project extends Component {



    render() {
        let {name, languagesIcons, source, info, picture} = this.props.item;

        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                        )}
                </div>
            </div>
        )
    }
}
