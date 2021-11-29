import React from 'react'

class Hero extends React.Component {

    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.age}</p>
                <p>{this.props.status}</p>
            </div>
        )
    }
}

export default Hero