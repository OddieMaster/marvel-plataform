import React from 'react';
import ImgLogo from '../../assets/roundedPhoto.png'
import Logo from '../Logo';
import { Nav, NavLink, Photo, Container,  ContainerLogo } from './NavBarElements';



const NavBar: React.FC = () => {
  return <>

    <Container>
      <ContainerLogo>
    <Logo Active />
      </ContainerLogo>
      <Nav>      
        <NavLink  photo={false} to="/">
        </NavLink>

        <NavLink  photo={false} to="/Personages">
          Personagens
        </NavLink>
        <NavLink  photo={false} to="/Filmes">
          Filmes
        </NavLink>
        <NavLink  photo={false} to="/HQ">
          HQs
        </NavLink>
        <Photo>
        <NavLink  photo={false} to="/Profile">
          <img src={ImgLogo} alt='logo' height="70px" width="70px"/>
        </NavLink>
        <NavLink  photo={true} to="/">
          Sair
        </NavLink>
        </Photo>
      </Nav>      
      </Container>  
    
      
      
   
  </>
    ;
}

export default NavBar;