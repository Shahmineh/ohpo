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
    
      <Footer />
  </div>
</Router>
