import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Row, Col, Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"

import MainNav from "../MainNav/MainNav.js"
import Hero from "../Hero/Hero.js"
import AboutUs from "../AboutUs/AboutUs.js"
import Dots from "../Dots/Dots.js"
import Contact from "../Contact/Contact.js"

const App = () => {
  return (
    <Router>
      <div className="App d-flex flex-column">
        <header>
          <MainNav />
        </header>
        <Container-fluid
          tag="main"
          className="flex-grow-1"
          style={{ marginTop: "96px" }}
        >
          <Route exact path="/">
            <Row className="mr-0">
              <Col className="col-12 p-0">
                <Hero />
              </Col>
            </Row>
          </Route>
        </Container-fluid>
        <Container className="container">
          <AboutUs />
          <Dots />
          <div style={{ textAlign: "center" }}>
            <Contact />
          </div>
          {/* Hide Cases untill there is some case to show */}
          {/* <Cases /> */}
        </Container>
      </div>
    </Router>
  )
}

export default App
