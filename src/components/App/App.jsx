<Router>
  {/* MobX observable style needs spread wrapping */}
  <div className="App d-flex flex-column" style={{...this.style}}>
    <header>
      <MainNav />
    </header>
    <Container tag="main" className="flex-grow-1">
      <Route exact path="/">
        <Row>
          <Col className="col-12 col-lg-8 offset-lg-2">
            
          </Col>
        </Row>
      </Route>
      <Route path="/clock" component={Clock} />
      <Route path="/todo-list" component={TodoList} />
      <Route path="/conditionals" component={Conditionals} />
      <Route path="/loops" component={Loops} />
    </Container>
    <footer className="bg-light mt-3">
      <small>React Warp Core &ndash; example app&nbsp;&nbsp;© Thomas Frank</small>
    </footer>
  </div>
</Router>
