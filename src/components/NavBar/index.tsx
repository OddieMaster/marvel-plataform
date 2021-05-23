import React from 'react';

import Logo from '../Logo';
import { Nav, NavLink, Line, Container, ContainerLogo } from './NavBarElements';



const NavBar: React.FC = () => {
  return <>

    <Container>
      <ContainerLogo>
    <Logo Active />
      </ContainerLogo>
      <Nav>      
        <NavLink to="/">
        </NavLink>

        <NavLink to="/Personagens">
          Personagens
        </NavLink>
        <NavLink to="/Filmes">
          Filmes
        </NavLink>
        <NavLink to="/HQ">
          HQ
        </NavLink>
        <NavLink to="/Profile">
          <img src={require('../../assets/logo.svg')} alt='logo' />
        </NavLink>
        <NavLink to="/">
          Sair
        </NavLink>
      </Nav>
      </Container>      
      <Line />
   
  </>
    ;
}

export default NavBar;