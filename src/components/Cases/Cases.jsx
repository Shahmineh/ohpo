<Fragment>
  <h2 className="cases__headline">Cases</h2>
  <Row>
    <Col sm="4" className="cases__imgs">
      <img alt="caseIkea" className="cases__img" src={caseIkea} />
    </Col>
    <Col sm="8" className="cases__text">
      <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
        <p>
          Lorem ipsum dolor sit amet consectetuer adipiscing elit. Non integer fames nascetur convallis morbi posuere id morbi metus. Ad magna accumsan nam. Condimentum etiam ridiculus sed purus. Suspendisse nec cras eni eros proin curabitur commodo ac eros ut a duis at. Diam dictum parturient vitae torquent dui eu consectetuer posuere netus pede habitant proin. Sit egestas neque augue sapien semper ullamcorper ut euismod massa dignissim vitae. Mi montes placerat adipiscing fames nulla sodales pharetra. Arcu duis phasellus tellus a potenti.
        </p>
      </ReactTextCollapse>
    </Col>
  </Row>

  <Row className="cases__row">
    <Col sm="4" className="cases__imgs">
      <img alt="caseBank" className="cases__img" src={caseBank} />
    </Col>
    <Col sm="8" className="cases__text">
    <ReactTextCollapse
      options={TEXT_COLLAPSE_OPTIONS}>
      <p>
        Lorem ipsum dolor sit amet consectetuer adipiscing elit. Non integer fames nascetur convallis morbi posuere id morbi metus. Ad magna accumsan nam. Condimentum etiam ridiculus sed purus. Suspendisse nec cras eni eros proin curabitur commodo ac eros ut a duis at. Diam dictum parturient vitae torquent dui eu consectetuer posuere netus pede habitant proin. Sit egestas neque augue sapien semper ullamcorper ut euismod massa dignissim vitae. Mi montes placerat adipiscing fames nulla sodales pharetra. Arcu duis phasellus tellus a potenti.
      </p>
      </ReactTextCollapse>
    </Col>
  </Row>

  <Row className="cases__row cases__rowCases">
    <Col xs="6" sm="3"><img alt="cases" className="cases__icons" src={case1} /></Col>
    <Col xs="6" sm="3"><img alt="cases" className="cases__icons" src={case2} /></Col>
    <Col xs="6" sm="3"><img alt="cases" className="cases__icons" src={case3} /></Col>
    <Col xs="6" sm="3"><img alt="cases" className="cases__icons" src={case4} /></Col>

  </Row>

  <Row className="cases__row cases__rowCases">
    <Col xs="6"><img alt="cases" className="cases__icons" src={case5} /></Col>
    <Col xs="6"><img alt="cases" className="cases__icons" src={case2} /></Col>
  </Row>

</Fragment>