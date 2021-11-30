import React from 'react'
import './style.css'
import axios from 'axios'

class HeroDetail extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            heroId: this.props.heroId,
            name: 'Example hero',
            age: 20,
            description: 'Example description',
            realname: 'Aka. Hero',
            status: 'actif',
            isLoaded: false
        }
    }

    componentDidUpdate()
    {
        if ( ! this.state.isLoaded ){
            var self = this;
            axios
                .get('http://localhost:3001/hero/' + this.props.heroId)
                .then(function(res){
                    console.log(res.data);
                    self.setState({
                        name: res.data.name,
                        age: res.data.age,
                        status: res.data.status,
                        isLoaded: true
                    });
                })
        }
    }

    render() {

        if ( !this.props.show ) {
            return(
                <div>
                    <div className="HeroDetail__item">
                        <div className="HeroDetail__item__header">
                            <h1>{this.state.name}</h1>
                            {this.state.heroId}
                            <a href="/" className="HeroDetails__close" onClick={this.props.onclick}>X</a>
                        </div>

                        <div className="HeroDetail__item__description">
                            <p>{this.state.description}</p>
                        </div>
                        <div className="HeroDetail__item__infos">
                            <div>
                                <div className="HeroDetail__item__meta">Aka</div>
                                <div>{this.state.realname}</div>
                            </div>
                            <div>
                                <div className="HeroDetail__item__meta">Age</div>
                                <div>{this.state.age}</div>
                            </div>
                            <div>
                                <div className="HeroDetail__item__meta">Status</div>
                                <div>{this.state.status}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                </div>
            )
        }
    }
}

export default HeroDetail