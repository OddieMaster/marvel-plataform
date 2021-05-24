import styled from 'styled-components'
import ButtonRight from '../../assets/buttonRight.png'
import ButtonLeft from '../../assets/buttonLeft.png'

export const Container = styled.div`
display: flex;
background-color: green;
flex-direction: row;
justify-content: space-around;
width: 100vw;
height: 100%;
margin-top: 5%;
align-items: center;
`;

export const ContainerAbsolute = styled.div`
/* opacity: 0.2; */
background-color: #000;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
flex-wrap: wrap;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  font-size: 3.6rem;   
  align-self: center;
  background: url(${ButtonRight}); 
  border:none!important;
  ;
  `
export const ButtonBack = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  font-size: 3.6rem;   
  align-self: center;
  background: url(${ButtonLeft}); 
  border:none!important;
  ;
  `