import styled, {css} from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


interface Aligments {    
    signOutText: boolean;
    }

export const Container = styled.div`
display: flex;
background-color: lightblue;
padding: 10px;
flex-direction: row;
width: 100%;
height: 100%;
border-bottom:1px solid red;
`;

export const ContainerLogo = styled.div`
background-color: green;
width: 200px;
height: 80px;
display: flex;
`;


export const Nav = styled.nav`
background: #000;
height: 80px;
display: flex;
z-index: 10;
justify-content: flex-end;
display: flex;
width: 95%;
`;

export const NavLink = styled(Link)<Aligments>`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 22px;

    ${({ signOutText }) =>
    signOutText &&
    css` 
     margin-right:20px;  
     margin-left: -20px;
     font-size: 18px;
      }
    `}
`;

