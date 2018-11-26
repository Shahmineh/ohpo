<div className="footer">
  <div className ="mt-3 d-flex justify-content-around border-top p-4">
    <div className="d-inline-block">
      <Link to="/" className = "footer__links" 
        style = {{textDecoration:'none'}}>
        <img alt="imgMail" 
        className="footer__linkImage" 
        src={imgMail} />
        <span className ="footer__link">Info@ohpokonsult.se</span>
      </Link>
    </div>
    <div className="d-inline-block">
      <a href="https://www.linkedin.com/company/ohpo-konsult-ab/?trk=cws-cpw-logo-0-0" className = "footer__links" 
        style = {{textDecoration:'none'}}>
        <img alt="imageLinkedIn" 
        className="footer__linkImage" 
        src={imgLinkedIn} />
        <span className="footer__link">OHPO Konsult</span>
      </a>
    </div>
  </div>
</div>