import React from "react"
import { Row, Col } from "bootstrap"
import "./Cases.scss"
import caseIkea from "./img/ikea.jpg"
import caseBank from "./img/bank.jpg"
import case1 from "./img/case1.png"
import case2 from "./img/case2.png"
import case3 from "./img/case3.png"
import case4 from "./img/case4.png"
import case5 from "./img/case5.png"
import case6 from "./img/case6.png"
import ReactTextCollapse from "react-text-collapse"
// react-text-collapse : A simple and customizable expand-collapse react component for the web
const TEXT_COLLAPSE_OPTIONS = {
  collapse: false, // default state when component rendered
  collapseText: "Läs mer", // text to show when collapsed
  expandText: "Visa mindre", // text to show when expanded
  minHeight: 78, // component height when closed
  maxHeight: 170, // expanded to
  textStyle: {
    // pass the css for the collapseText and expandText here
    color: " #ba0000",
    fontSize: "18px",
    cursor: "pointer",
  },
}

const Cases = () => {
  return (
    <div className="cases" id="cases">
      <h2 className="cases__headline">Cases</h2>
      <Row>
        <Col sm="4" className="cases__imgs">
          <img alt="caseIkea" className="cases__img" src={caseIkea} />
        </Col>
        <Col sm="8" className="cases__text">
          <h5>Ikea</h5>
          <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
            <p>
              Lorem ipsum dolor sit amet consectetuer adipiscing elit. Non
              integer fames nascetur convallis morbi posuere id morbi metus. Ad
              magna accumsan nam. Condimentum etiam ridiculus sed purus.
              Suspendisse nec cras eni eros proin curabitur commodo ac eros ut a
              duis at. Diam dictum parturient vitae torquent dui eu consectetuer
              posuere netus pede habitant proin. Sit egestas neque augue sapien
              semper ullamcorper ut euismod massa dignissim vitae. Mi montes
              placerat adipiscing fames nulla sodales pharetra. Arcu duis
              phasellus tellus a potenti.
            </p>
          </ReactTextCollapse>
        </Col>
      </Row>

      <Row className="cases__row">
        <Col sm="4" className="cases__imgs">
          <img alt="caseBank" className="cases__img" src={caseBank} />
        </Col>
        <Col sm="8" className="cases__text">
          <h5>Swedbank</h5>
          <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
            <p>
              Lorem ipsum dolor sit amet consectetuer adipiscing elit. Non
              integer fames nascetur convallis morbi posuere id morbi metus. Ad
              magna accumsan nam. Condimentum etiam ridiculus sed purus.
              Suspendisse nec cras eni eros proin curabitur commodo ac eros ut a
              duis at. Diam dictum parturient vitae torquent dui eu consectetuer
              posuere netus pede habitant proin. Sit egestas neque augue sapien
              semper ullamcorper ut euismod massa dignissim vitae. Mi montes
              placerat adipiscing fames nulla sodales pharetra. Arcu duis
              phasellus tellus a potenti.
            </p>
          </ReactTextCollapse>
        </Col>
      </Row>

      <Row className="cases__row cases__row-cases">
        <Col xs="6" sm="3">
          <img alt="cases" className="cases__icons" src={case1} />
        </Col>
        <Col xs="6" sm="3">
          <img alt="cases" className="cases__icons" src={case2} />
        </Col>
        <Col xs="6" sm="3">
          <img alt="cases" className="cases__icons" src={case3} />
        </Col>
        <Col xs="6" sm="3">
          <img alt="cases" className="cases__icons" src={case4} />
        </Col>
      </Row>

      <Row className="cases__row cases__row-cases">
        <Col xs="6">
          <img alt="cases" className="cases__icons" src={case5} />
        </Col>
        <Col xs="6">
          <img alt="cases" className="cases__icons" src={case2} />
        </Col>
      </Row>
    </div>
  )
}

export default Cases
