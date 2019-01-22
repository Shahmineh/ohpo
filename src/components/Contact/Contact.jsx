<div className="contact" id="contact" style={{ display: 'inline-block' }}>
  <h2 className="contact__headline text-center mt-5 mb-4">Let's get in touch</h2>
  <p className="contact__text text-center pb-3">
    Ready to start your next project with us? That's great!
    Give us a call or send us an email and we will get back to
    you as soon as possible!
  </p>
  <div className="text-center mt-5 pb-5">
    <span className="d-inline-block mr-5"
      style={{ cursor: 'pointer' }}
      onClick={this.openLinkedin}>
      <img src={linkedin} className="contact__linkedin" alt="" />
      <p className="contact__linkedin-text">OHPO konsult</p>

    </span>
    <span className="d-inline-block ml-1">
      <a href="mailto:info@ohpokonsult.se" style={{ color: '#000' }}>
        <img src={mail} className="contact__mail" alt="" />
        <p className="contact__mail-text">
          info@ohpokonsult.se
        </p>
      </a>

    </span>
  </div>
</div>