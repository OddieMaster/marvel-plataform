import styled, { css } from 'styled-components'
import ButtonRight from '../../assets/buttonRight.png'
import ButtonLeft from '../../assets/buttonLeft.png'

interface CardSide {
  left?: boolean;
  middle?: boolean;
  right?: boolean;
}

export const ContainerButton = styled.div`
display: flex;
background-color:rgba(0,0,0,0) 100%;
width: 100%;
height: 100%;
margin-top: 100px;

`

export const ContainerCards = styled.div`
display: grid;
background-color: rgba(0,0,0,0) 100%;;
width: 100%;
height: 100%;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 20px;
margin-left: 50px;
`;

export const ContainerOpacity = styled.div`
 opacity: 0.2; 
background-color: pink;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
align-self: flex-start;
`;
export const ContainerAbsolute = styled.div<CardSide>`

background-color:linear-gradient(90deg, rgba(145,29,29,0) 0%, rgba(255,0,0,0) 50%, rgba(145,29,29,0) 100%);;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
align-self: flex-start;
${({ left }) => left &&
    css`
        left: -490px;
        top: 175px;
     }`}
     ${({ middle }) => middle &&
    css`
        left: -260px;
        top: 175px;
     }`} 
     ${({ right }) => right &&
    css`
        left: 311px;
        top: 175px;
     }`}     

`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  font-size: 3.6rem;    
  background: url(${ButtonRight}); 
  border:none!important;
  align-self: center ;
  margin-right: 80px;
  ;
  `
export const BackButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  font-size: 3.6rem;   
  align-self: center;
  background: url(${ButtonLeft}); 
  border:none!important;
  margin-right: 100px;
  margin-left: 100px;
  ;
  `