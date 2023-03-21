import React, { useState } from 'react'

function Parallax() {
    const [background, setBackgound] = useState(20)
    return (
        <div className='parallax-wrapper'>
            <div style={{ background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )` }} className='parallax'></div>
        </div>
    )
}

export default Parallax