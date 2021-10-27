import React from 'react';
import img_1 from './img.jpg';
import './hero.css'

export default function Hero() {
    return (
        <div className="hero_component">
         <img src={img_1} className="hero_img" alt="ITF"></img>   
        </div>
    )
}
