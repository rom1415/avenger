import React from 'react'
import Hero from '../Hero/Hero.js'
import axios from 'axios'
import './style.css'

class HeroList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            heroes: [],
            filtered: [],
            searchTerm: ''
        }

        let self = this;

        axios
            .get('http://localhost:3001/heroes')
            .then(function(res){
                self.setState({
                    heroes: res.data,
                    filtered: res.data,
                })
            })
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        });

        if ( e.target.value === '' ) {
            this.setState({
                filtered: this.state.heroes
            });
        } else {
            let filtered = this.state.heroes.filter(hero => hero.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
                
            this.setState({
                filtered: filtered
            });
        }
    };
 
    render() {

        if ( this.state.filtered.length === 0 ) {
            return (
                <div>
                    <input type="text" className="HeroList__search" onChange={this.handleChange}></input>
                    <h1>No result(s)</h1>
                </div>
            )
        }

        return(
            <div>
                <input type="text" className="HeroList__search" onChange={this.handleChange}></input>
                <div className="HeroList__container">
                {
                    this.state.filtered.map((hero, index) => {
                        return (
                            <a className="HeroList__hero__item">
                                <Hero 
                                    key={index} 
                                    id={hero._id}
                                    name={hero.name}
                                    age={hero.age}
                                    status={hero.status}
                                ></Hero>
                            </a>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default HeroList