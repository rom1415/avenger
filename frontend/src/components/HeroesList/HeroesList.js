import React from 'react'
import Hero from '../Hero/Hero.js'
import axios from 'axios'

class HeroList extends React.Component {

    constructor(props){
        super(props)

        axios
            .get('localhost:3001/heroes')
            .then(function(res){
                console.log(res.data);
            })
    }

    render() {
        return(
            <div>
                <h1>HeroList</h1>
                <Hero name="Hero name"></Hero>
                <Hero name="Hero name 2"></Hero>
                <Hero name="Hero name 3"></Hero>
            </div>
        )
    }
}

export default HeroList