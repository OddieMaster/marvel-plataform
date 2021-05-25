import styled, {css} from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


interface Aligments {    
  photo?: boolean;
  Opacity?:boolean;
    }

export const Container = styled.div<Aligments>`
${({ Opacity }) => Opacity &&
        css`
        opacity: 0.2;
     }`}
display: flex;
background-color: lightblue;
flex-direction: row;
width: 100%;
height: 100%;
border-bottom:1px solid red;

`;

export const ContainerLogo = styled.div`
background-color: green;
width: 50%;
height: 80px;
display: flex;

`;
export const Photo = styled.div`
background-color: pink;
width: 20%;
height: 80px;
display: flex;
justify-content:flex-start;

`;

export const Nav = styled.nav`
background: #000;
height: 80px;
display: flex;

justify-content: space-around;

width: 95%;
`;

export const NavLink = styled(Link)<Aligments>`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
font-family: system-ui;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 2.1rem;
${({ photo }) => photo &&
        css`
        font-size: 1.9rem;
        margin-left: -15px;
     }`}
`;

