import React from 'react';
import ImgLogo from '../../assets/roundedPhoto.png'
import Logo from '../Logo';
import { Nav, NavLink, Container, ContainerLogo } from './NavBarElements';



const NavBar: React.FC = () => {
  return <>

    <Container>
      <ContainerLogo>
    <Logo Active />
      </ContainerLogo>
      <Nav>      
        <NavLink  signOutText={false} to="/">
        </NavLink>

        <NavLink  signOutText={false} to="/Personagens">
          Personagens
        </NavLink>
        <NavLink  signOutText={false} to="/Filmes">
          Filmes
        </NavLink>
        <NavLink  signOutText={false} to="/HQ">
          HQ
        </NavLink>
        <NavLink  signOutText={false} to="/Profile">
          <img src={ImgLogo} alt='logo' height="70px" width="70px"/>
        </NavLink>
        <NavLink  signOutText to="/">
          Sair
        </NavLink>
      </Nav>      
      </Container>  
    
      
      
   
  </>
    ;
}

export default NavBar;