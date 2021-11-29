import React from 'react'
import Hero from '../Hero/Hero.js'
import axios from 'axios'

class HeroList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            heroes: []
        }

        let self = this;

        axios
            .get('http://localhost:3001/heroes')
            .then(function(res){
                self.setState({
                    heroes: res.data
                })
            })
    }

    render() {
        return(
            <div>
                <h1>HeroList</h1>
                {
                    this.state.heroes.map((hero, index) => {
                        return (
                            <Hero 
                                key={index} 
                                name={hero.name}
                                age={hero.age}
                                status={hero.status}
                            ></Hero>
                        )
                    })
                }
            </div>
        )
    }
}

export default HeroList