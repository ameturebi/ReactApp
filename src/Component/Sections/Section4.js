import React from 'react'
import vision from '../Image/apple-logo.png'   
import logo from '../icons/logo.png' 
import style from '../CSS/style.css'
function Section4() {
  return (
    <div  className="Visionpro">
          <div className="watch"> 
                        <div className="logo B"><img src={logo} alt="logo"/><b>Watch</b></div>
                        <div className="series">series 9</div>
                        <div className="smart">Smarter.Brighter.Mighter</div>
                        <div className="ipadlinks">
                        <div className="learn links"><a href="#">Learn More</a></div>
                        <div className="shop links"><a href="#">Pre Order</a></div>
                        </div>
                    </div>
       <div className="vision">
                <div className="logo C"><img src={vision} alt="vision"/>Vision Pro</div>
                <div className="applespecial">The era of spacial computing is here</div>
                <div className="ipadlinks">
                    <div className="Learn link"><a href="">Learn More</a>
                    </div>
                    <div className="buy link A"><a href="">Buy </a>
                    </div>
                </div>
    </div>
    </div>
  )
}

export default Section4
