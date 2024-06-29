import React, { useState } from 'react';
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const exit = () => {
    logout();
    window.location.href = '/';
  }

  
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/home">LibraryZ</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/cart"><FaShoppingCart className="mb-1"/> Meu Carrinho</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sales"><FaTicket className="mb-1"/> Acompanhar Pedidos </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={exit} style={{cursor: "pointer"}}><IoMdExit className="mb-1"/> Sair </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Header;