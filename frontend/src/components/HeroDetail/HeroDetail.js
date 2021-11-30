import React from 'react'
import './style.css'

class HeroDetail extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            name: 'Example hero',
            age: 20,
            description: 'Example description',
            realname: 'Aka. Hero',
            status: 'actif'
        }
    }

    render() {

        if ( !this.props.show ) {
            return(
                <div>
                    <div className="HeroDetail__item">
                        <div className="HeroDetail__item__header">
                            <h1>{this.state.name}</h1>
                            <a href="/" className="HeroDetails__close" onClick={this.props.onclick}>X</a>
                        </div>

                        <div className="HeroDetail__item__description">
                            <p>{this.state.description}</p>
                        </div>
                        <div className="HeroDetail__item__infos">
                            <div>
                                <div class="HeroDetail__item__meta">Aka</div>
                                <div>{this.state.realname}</div>
                            </div>
                            <div>
                                <div class="HeroDetail__item__meta">Age</div>
                                <div>20</div>
                            </div>
                            <div>
                                <div class="HeroDetail__item__meta">Status</div>
                                <div>Actif</div>
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