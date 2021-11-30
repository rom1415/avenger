import React from 'react'
import './style.css'

class Hero extends React.Component {
    render() {
        return(
            <div className="Hero__item" id={this.props.id} >
                <div className="Hero__item__header">
                    <h1>
                        <a href="#/hero/1234" data-id={this.props.id} onClick={this.props.onclick}>{this.props.name}</a>
                    </h1>
                    <p>Aka. {this.props.name}</p>
                </div>
                <div className="Hero__item__content">
                </div>
                <div className="Hero__item__footer">
                    <p>Age: {this.props.age}</p>
                    <p className="uppercase" >{this.props.status}</p>
                </div>
            </div>
        )
    }
}

export default Hero