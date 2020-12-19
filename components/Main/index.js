import React, { Component } from 'react'
import NavBar from '../NavBar'
import './styles.css'

export default class Main extends Component {
    render() {
        return (
            <main>
                <NavBar />
                <section className="flex">
                    <div>
                        <img src="https://www.eprogramar.com.br/assets/images/slider-2.png"></img>
                        <div className="legenda">
                            <p>Legenda</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.eprogramar.com.br/assets/images/slider-3.png"></img>
                        <div className="legenda">
                            <p>Legenda</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.eprogramar.com.br/assets/images/slider-1.png"></img>
                        <div className="legenda">
                            <p>Legenda</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.eprogramar.com.br/assets/images/slider-2.png"></img>
                        <div className="legenda">
                            <p>Legenda</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.eprogramar.com.br/assets/images/slider-3.png"></img>
                        <div className="legenda">
                            <p>Legenda</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.eprogramar.com.br/assets/images/slider-1.png"></img>
                        <div className="legenda">
                            <p>Legenda</p>
                        </div>
                    </div>                    
                </section>                
            </main>
        )
    }
}