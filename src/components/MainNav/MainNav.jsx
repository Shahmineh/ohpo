<div className="mainNav">
  <Navbar light expand="md"
  style={{padding: '20px', backgroundColor: '#fff'}} className="fixed-top">
    <NavItem>
      <Scrollchor to='' className="nav-link">
        <h2 className="navigation__logo">OHPO Konsult</h2>
      </Scrollchor>
      
    </NavItem>
    <NavbarToggler onClick={e => this.toggle()} />
    <Collapse isOpen={this.isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          {/* Scrollchor: A React component for scroll to #hash links with smooth animations */}
          <Scrollchor exact="true" to="#about-us" className="nav-link">Om oss</Scrollchor>
        </NavItem>
        <NavItem>
          <Scrollchor to="#excel" className="nav-link">Våra tjänster</Scrollchor>
        </NavItem>
        <NavItem>
          <Scrollchor to="#contact" className="nav-link">Kontakta oss</Scrollchor>
        </NavItem>
        
        {/* Hide cases and english until there are cases and content in english*/}
        {/* <NavItem>
          <Scrollchor to="#cases" className="nav-link">Cases</Scrollchor>
        </NavItem>
        <NavItem>
          <NavLink to="/conditionals">In English</NavLink>
        </NavItem> */}
      </Nav>
    </Collapse>
  </Navbar>
</div>