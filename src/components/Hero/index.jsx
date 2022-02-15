import React from "react";
import './Hero.css';
import iconoReact from './img/react.png';

import Img from "react-cool-img";
import loadingImage from "./img/loading.gif";
import errorImage from "./img/error.png";
import Reloj from '../Reloj';  


export default function Hero() {

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Full Stack</h2>

        <figure>
          <Img src={iconoReact} alt="logo html" className="t-35rem" placeholder={loadingImage}  error={errorImage}/>
          
          {/* <Img src={iconoPhp} alt="logo php" className="t-90"  placeholder={loadingImage}  error={errorImage}/> */}
        </figure>

        <h2> Erlich Rodríguez</h2>
        <Reloj/>

      </div>
    </section>
  );
}
