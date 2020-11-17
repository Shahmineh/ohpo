import React from "react"
import "./Footer.scss"
import imgLinkedIn from "./images/linkedin-sign.png"
import imgMail from "./images/mail-black-envelope-symbol.png"

const Footer = () => {
  const openLinkedin = () => {
    window.open(
      "https://www.linkedin.com/company/ohpo-konsult-ab/?trk=cws-cpw-logo-0-0",
    )
  }

  return (
    <div className="footer">
      <div className="mt-3 d-flex justify-content-around border-top p-4">
        <div className="d-inline-block">
          <a
            href="mailto:info@ohpokonsult.se"
            className="footer__links"
            style={{ textDecoration: "none" }}
          >
            <img alt="imgMail" className="footer__linkImage" src={imgMail} />
            <span className="footer__link">Info@ohpokonsult.se</span>
          </a>
        </div>
        <div
          className="d-inline-block"
          style={{ cursor: "pointer" }}
          onClick={openLinkedin}
        >
          <img
            alt="imageLinkedIn"
            className="footer__linkImage"
            src={imgLinkedIn}
          />
          <span className="footer__link">OHPO Konsult</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
