import React from 'react'

class Hero extends React.Component {
    render() {
        return(
            <h1>{this.props.name}</h1>
        )
    }
}

export default Hero