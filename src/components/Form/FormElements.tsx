import styled, {  css } from "styled-components";
import AxiformaBold from "../../fonts/types/Kastelov - Axiforma Bold.otf"

interface InputProps {
  primary?: boolean;
  secondary?: boolean;
  checkbox?: boolean;
  register?: boolean;
  registerInfo?: boolean;
}



export const Container2 = styled.div`
display: flex;
background-color: black;
width: 420px;
height: 25px;
justify-content: space-between;
align-self: center;  
> * {
      &:first-child {
          
      }
    }
> * {
      &:nth-child(0) {      
      justify-content: flex-end;
      }
    }
`

export const Container3 = styled.div`
display: flex;
background-color: black;
width: 390px;
height: 25px;
align-items: center;
justify-content: center;

`

export const Container = styled.div`
display: flex;
color: white;
background-color: black;
align-items: flex-start;
flex-direction: column;
justify-content: space-between;
width: 390px;
height: 500px;
position: absolute;
top: 200px;

`;

export const Input = styled.input<InputProps>`
 
  ${({ secondary }) =>
    secondary &&
    css` 
        
      }
    `}  
  width: 383px;
  height: 73px;
  border-radius: 100px;
  &::-webkit-input-placeholder {
    font-size: 2.5rem;
    position: relative;
    left: 30px;
  }
  
  `;
export const Div = styled.div<InputProps>`
  color: red;  
  font-size: 3.0rem;
  font-weight: bold;
  font-family: ${AxiformaBold};
  ${({ primary }) =>
    primary &&
    css` 
      color: #84848d;      
      }
    `}
    ${({ checkbox }) =>
    checkbox &&
    css` 
      color: #84848d;     
      font-size: 1.8rem;  
      margin-right: 170px; 

      }
    `}
    ${({ registerInfo }) =>
    registerInfo &&
    css`     
    color: #84848d;
    font-size: 1.8rem;
    }
  `}`


export const CheckBox = styled.input`
  outline: 2px groove #FF0000;
  outline-offset: 0px; 
  `

export const Ref = styled.a<InputProps>`
  display: flex;
  align-self: center;   
  color: #84848d;  
  font-size: 1.8rem;
  text-decoration: underline;
  text-decoration-color: red;
  margin-right: 15px;
  text-decoration-thickness: 2.3px;
  ${({ register }) =>
    register &&
    css` 
      color: red;
      display: flex;          
      font-size: 1.8rem;
      text-decoration: none;
      margin-left: 5px;
      }
    `}`

export const Button = styled.button`
  width: 393px;
  height: 79px;
  border-radius: 100px;
  font-size: 3.6rem; 
  background-color: red;
  color: white;  
  `