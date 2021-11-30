import React from 'react'
import './style.css'

class Hero extends React.Component {

    render() {
        return(
            <div className="Hero__item">
                <div className="Hero__item__header">
                    <h1>
                        <a href="#">{this.props.name}</a>
                    </h1>
                </div>
                <div className="Hero__item__content">
                </div>
                <div className="Hero__item__footer">
                    <p>{this.props.age}</p>
                    <p>{this.props.status}</p>
                </div>

            </div>
        )
    }
}

export default Hero