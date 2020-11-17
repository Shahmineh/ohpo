import React from "react"
import "./Contact.scss"
import linkedin from "./images/linkedin.png"
import mail from "./images/mail.png"

const Contact = () => {
  const openLinkedin = () => {
    window.open(
      "https://www.linkedin.com/company/ohpo-konsult-ab/?trk=cws-cpw-logo-0-0",
    )
  }

  return (
    <div className="contact" id="contact" style={{ display: "inline-block" }}>
      <h2 className="contact__headline text-center mt-5 mb-4">Kontakta oss</h2>
      <p className="contact__text text-center pb-3">
        Redo att starta ditt nästa projekt med oss? Toppen! Skicka ett mail så
        kontaktar vi dig så snart som möjligt!
      </p>
      <div className="text-center mt-5 pb-5">
        <span
          className="d-inline-block mr-5"
          style={{ cursor: "pointer" }}
          onClick={openLinkedin}
        >
          <img src={linkedin} className="contact__linkedin" alt="" />
          <p className="contact__linkedin-text">OHPO konsult</p>
        </span>
        <span className="d-inline-block ml-1">
          <a
            href="mailto:info@ohpokonsult.se"
            style={{ color: "#000", textDecoration: "none" }}
          >
            <img src={mail} className="contact__mail" alt="" />
            <p className="contact__mail-text">info@ohpokonsult.se</p>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Contact
