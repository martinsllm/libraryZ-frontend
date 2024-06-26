import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { IoMdSettings, IoMdExit } from 'react-icons/io';
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
                <NavLink href="/wishlist"><FaHeart className="mb-1"/> Favoritos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cart"><FaShoppingCart className="mb-1"/> Meu Carrinho</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <IoMdSettings className="mb-1"/> Opções
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/sales"> 
                    <FaShoppingCart className="mb-1"/> Minhas Compras
                  </DropdownItem>
                  <DropdownItem onClick={this.logout}>
                    <IoMdExit className="mb-1"/> Sair
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}