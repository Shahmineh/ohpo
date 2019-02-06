<div className="contact" id="contact" style={{ display: 'inline-block' }}>
  <h2 className="contact__headline text-center mt-5 mb-4">Let's get in touch</h2>
  <p className="contact__text text-center pb-3">
    Redo att starta ditt nästa projekt med oss? Toppen!
    Ring oss eller skicka ett mail så kontaktar vi dig så snart som möjligt!
  </p>
  <div className="text-center mt-5 pb-5">
    <span className="d-inline-block mr-5"
      style={{ cursor: 'pointer' }}
      onClick={this.openLinkedin}>
      <img src={linkedin} className="contact__linkedin" alt="" />
      <p className="contact__linkedin-text">OHPO konsult</p>

    </span>
    <span className="d-inline-block ml-1">
      <a href="mailto:info@ohpokonsult.se" style={{ color: '#000', textDecoration: 'none' }}>
        <img src={mail} className="contact__mail" alt="" />
        <p className="contact__mail-text">
          info@ohpokonsult.se
        </p>
      </a>

    </span>
  </div>
</div>

 