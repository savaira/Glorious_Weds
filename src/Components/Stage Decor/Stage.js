import React from 'react'
import './Stage.css'
import scan from './frame.png'

export default function Stage() {
    return (
        <div>
            <h1 style={{marginTop:"2%",marginBottom:"4%"}}>Scan QR Code For Stage Decor</h1>
            <img src={scan} alt="Scan Me" className="scan"/>
        </div>
    )
}
