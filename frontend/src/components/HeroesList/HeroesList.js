import React from 'react'
import Hero from '../Hero/Hero.js'
import axios from 'axios'
import Switch from "react-switch";
import './style.css'

class HeroList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            heroes: [],
            filtered: [],
            searchTerm: '',
            checked: false,
            statusFilter:''
        }

    }

    componentDidMount()
    {
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

    handleStatus = (e) => {
        this.setState({checked: e})

        let filtered = this.state.heroes.filter(hero => hero.status.includes('inactif'))

        if ( !e ) {
            filtered = this.state.heroes.filter(hero => hero.status.includes('actif'))
        }

        this.setState({
            filtered: filtered
        })
    }

    render() {
        return(
            <div>
                <div className="HeroList__search__container">
                    <div className="HeroList__search__container__input">
                        <input type="text" className="HeroList__search" onChange={this.handleChange}></input>
                    </div>
                    <div className="HeroList__search__container__switch">
                        <span>Actif</span>
                            <Switch onChange={this.handleStatus} checked={this.state.checked} />
                        <span>Inactif</span>
                    </div>
                </div>
                <div className={this.props.show ? 'HeroList__container' : 'HeroList__container HeroList__container__hidden'}>
                {
                    this.state.filtered.map((hero, index) => {
                        return (
                            <a key={index} href="#/" className="HeroList__hero__item">
                                <Hero 
                                    id={hero._id}
                                    name={hero.name}
                                    age={hero.age}
                                    status={hero.status}
                                    onclick={this.props.onclick}
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