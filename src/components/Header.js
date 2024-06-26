import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdExit } from 'react-icons/io';
import { FaTicket } from "react-icons/fa6";
import { logout } from '../services/auth';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout() {
    logout();
    window.location.href = '/';
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/home">LIbraryZ</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/cart"><FaShoppingCart className="mb-1"/> Meu Carrinho</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sales"><FaTicket className="mb-1"/> Acompanhar Pedidos </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.logout}><IoMdExit className="mb-1"/> Sair </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}