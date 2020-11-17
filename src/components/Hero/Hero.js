import React from "react"
import "./Hero.scss"
import hero from "./images/malmo.jpg"

const Hero = () => {
  return (
    <div className="hero">
      <img
        alt="Computer with excel pic on"
        className="hero__image"
        src={hero}
      />
      <div className="hero__content hero__contentHolder">
        <span className="hero__content--darken">
          <p className="hero__text">TILLSAMMANS SKAPAR VI ETT SMARTARE,</p>
          <p className="hero__text">SÄKRARE OCH MER ANVÄNDARVÄNLIGT EXCEL</p>
        </span>
      </div>
    </div>
  )
}

export default Hero
