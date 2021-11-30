import React from 'react'
import './style.css'

class Hero extends React.Component {

    render() {
        return(
            <div className="Hero__item">
                <h1>{this.props.name}</h1>
                <p>{this.props.age}</p>
                <p>{this.props.status}</p>
            </div>
        )
    }
}

export default Hero