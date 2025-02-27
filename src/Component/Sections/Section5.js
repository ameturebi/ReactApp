import React from 'react'
import vision from '../Image/apple-logo.png' 
import logo from '../icons/logo.png' 
import style from '../CSS/style.css'
function Section5() {
  return (
    <div>
      <section class="section6">
        <div class="outerwrapper">
            <div class="applecard">
                <div class="logo h"><img src={vision}alt="logo"/>Card</div>
                <div class="Cash">Get up to 3% Cash bank <br/>with every purchase.</div>
                <div class="cardlinks">
                    <div class="G"><a href="#">Learn More</a></div>
                    <div class="apply"><a href="#">Apply now</a></div>
                </div>
            </div>
            <div class="trade">
                <div class="logo h"><img src={vision}alt="logo"/>Trade In</div>
                <div class="cash">Get $170-$670 in credit when you <br/>trade in iphone 11 or higher <sup>3</sup>.</div>
                <div class="G g"><a href="">Get your estimate</a></div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Section5
