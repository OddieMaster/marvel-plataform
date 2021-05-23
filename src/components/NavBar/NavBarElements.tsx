import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


interface activeStyle {
    activeStyle?: boolean;
    }

export const Container = styled.div`
display: flex;
background-color: lightblue;
padding: 10px;
flex-direction: row;

`;

export const ContainerLogo = styled.div`
background-color: green;
width: 200px;
height: 80px;
display: flex;
`


export const Nav = styled.nav`
background: #000;
height: 80px;
width: 700px;
display: flex;
z-index: 10;
justify-content: space-around;
display: flex;


`;

export const NavLink = styled(Link)<activeStyle>`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 22px;
`;


export const Line = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  border-color: red;
  margin-left: -100px;
`;