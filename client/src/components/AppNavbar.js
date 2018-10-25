import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  InputGroup
} from 'reactstrap';
import SearchBar from "./SearchBar";
import MSButton from "./MostSearchedButton";



class AppNavbar extends Component {
  state = {
    isOpen: false
  };


  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" className="mb-5">
          <Container>
            <NavbarBrand href=".">SearchApp</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <InputGroup>
                    <SearchBar />
                  </InputGroup>
                </NavItem>
                <NavItem>
                  <MSButton />
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/GooF89">github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default AppNavbar;