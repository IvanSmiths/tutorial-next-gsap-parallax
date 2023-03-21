import React, { useState } from 'react'

function Parallax() {
    const [background, setBackgound] = useState(20)
    return (
        <div className='parallax-wrapper'>
            <div style={{ background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )` }} className='parallax'>
                <img className='mountain-3' src="/parallax/mountain-3.svg" />
                <img className='mountain-2' src="/parallax/mountain-2.svg" />
                <img className='mountain-1' src="/parallax/mountain-1.svg" />
                <img className='sun' src="/parallax/sun.svg" />
                <img className='clouds-bottom' src="/parallax/cloud-bottom.svg" />
                <img className='clouds-left' src="/parallax/clouds-left.svg" />
                <img className='clouds-right' src="/parallax/clouds-right.svg" />
                <img className='stars' src="/parallax/stars.svg" />
                <div className="copy">
                    <h1>Journey</h1>
                    <span>Discover more</span>
                </div>
            </div>
        </div>
    )
}

export default Parallax