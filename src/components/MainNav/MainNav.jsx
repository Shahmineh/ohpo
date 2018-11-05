<div>
  <Navbar light expand="md">
    <NavbarBrand to="/">
      {/* <img alt="React" className="logo" src={logo} /> */}
      <h2 className="navigation__logo">OHPO Konsult</h2>
    </NavbarBrand>
    <NavbarToggler onClick={e => this.toggle()} />
    <Collapse isOpen={this.isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink exact to="/" activeClassName = "active">Om oss</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/clock" activeClassName = "active">Kontakta oss</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/todo-list" activeClassName = "active">Cases</NavLink>
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