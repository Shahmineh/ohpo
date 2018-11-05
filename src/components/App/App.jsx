<Router>
  {/* MobX observable style needs spread wrapping */}
  <div className="App d-flex flex-column" style={{...this.style}}>
    <header>
      <MainNav />
    </header>
    <Container-fluid tag="main" className="flex-grow-1">
      <Route exact path="/">
        <Row>
          <Col className="col-12">
            <Hero />
          </Col>
        </Row>
      </Route>
    </Container-fluid>
    <Container>
      
    </Container>
    <footer className="bg-light mt-3">
      <div>
        <Link to="/" style = {{textDecoration:'none'}}><img alt="imgMail" className="imgFooter" src={imgMail} />
        <small className="linkFooter">Info@ohpokonsult.se</small>
        </Link>
      </div>
      <div>
        <Link to="/clock" style = {{textDecoration:'none'}}><img alt="imgLinked" className="imgFooter" src={imgLinkedIn} /><small className="linkFooter">OHPO Konsult</small>
        </Link>
      </div>
    </footer>
  </div>
</Router>
