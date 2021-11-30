import React from 'react'
import Hero from '../Hero/Hero.js'
import axios from 'axios'
import './style.css'

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
                <div className="HeroList__container">
                {
                    this.state.heroes.map((hero, index) => {
                        return (
                            <div className="HeroList__hero__item">
                                <Hero 
                                    key={index} 
                                    name={hero.name}
                                    age={hero.age}
                                    status={hero.status}
                                ></Hero>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default HeroList