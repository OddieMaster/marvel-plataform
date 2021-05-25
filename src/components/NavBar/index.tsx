import React from 'react';
import ImgLogo from '../../assets/roundedPhoto.png'
import Logo from '../Logo';
import { Nav, NavLink, Photo, Container,  ContainerLogo } from './NavBarElements';
interface Props {
  Opacity?: boolean;
}


const NavBar: React.FC<Props> = (props) => {
  const Opacity = props;
  return <>

    <Container {...Opacity ? Opacity : null}>
      <ContainerLogo>
    <Logo Active />
      </ContainerLogo>
      <Nav>    
        <NavLink  photo={false} to="/Personages">
          Personagens
        </NavLink>
        <NavLink  photo={false} to="/Movies">
          Filmes
        </NavLink>
        <NavLink  photo={false} to="/HQs">
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