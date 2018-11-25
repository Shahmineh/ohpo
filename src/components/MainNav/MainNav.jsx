<div className="mainNav">
  <Navbar light expand="md"
  style={{padding: '20px', backgroundColor: '#fff'}} className="fixed-top">
    <NavbarBrand  to="/">
      {/* <img alt="React" className="logo" src={logo} /> */}
      <h2 className="navigation__logo">OHPO Konsult</h2>
    </NavbarBrand>
    <NavbarToggler onClick={e => this.toggle()} />
    <Collapse isOpen={this.isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink><Scrollchor exact to="#about-us" activeClassName = "active">Om oss</Scrollchor></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Scrollchor to="#contact" activeClassName = "active">Kontakta oss</Scrollchor></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Scrollchor to="#cases" activeClassName = "active">Cases</Scrollchor></NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/conditionals" activeClassName = "active">In English</NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink to="/loops" activeClassName = "active">Loops</NavLink>
        </NavItem> */}
      </Nav>
    </Collapse>
  </Navbar>
</div>