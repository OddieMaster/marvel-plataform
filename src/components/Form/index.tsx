import React from 'react';
import styled, { css } from "styled-components";

interface InputProps {
  primary?: boolean;
  secondary?: boolean;
  checkbox?: boolean;
  register?: boolean;
  registerInfo?: boolean;
}

const Input = styled.input<InputProps>`
position: absolute;
top: 500px;
${({ secondary }) =>
    secondary &&
    css` 
    top: 600px;   
    }
  `}
right: 1500px;
width: 383px;
height: 73px;
border-radius: 100px;
&::-webkit-input-placeholder {
  font-size: 25px;
  position: relative;
  left: 30px;
}

`;
const Div = styled.div<InputProps>`
color: red;
position: absolute;
top: 410px;
right: 1575px;
font-size: 30px;
font-weight: bold;
${({ primary }) =>
    primary &&
    css` 
    color: #84848d;
    top: 450px;
    right: 1650px;  
    }
  `}
  ${({ checkbox }) =>
    checkbox &&
    css` 
    color: #84848d;
    top: 710px;
    right: 1770px;  
    font-size: 18px;
    }
  `}
  ${({ registerInfo }) =>
    registerInfo &&
    css` 
  color: #84848d;
  top: 870px;
  right: 1675px;  
  font-size: 18px;
  }
`}`

const LoginForm = styled.form`
position: relative;
top: -130px;
left: 830px;
`
const CheckBox = styled.input`
outline: 2px groove #FF0000;
outline-offset: 0px;
position: relative;
top 710px;
left: 30px;
`

const Ref = styled.a<InputProps>`
color: #84848d;
position: relative;
top 710px;
left: 250px;
font-size: 18px;
text-decoration: underline;
text-decoration-color: red;
text-decoration-thickness: 2.3px;
${({ register }) =>
    register &&
    css` 
    color: red;
    position: absolute;
    top: 870px;   
    font-size: 18px;
    text-decoration: none;
    }
  `}`

const Button = styled.button`
position: absolute;
top: 770px;
right: 1500px;
width: 393px;
height: 79px;
border-radius: 100px;
font-size: 36px;
background-color: red;
color: white;

}


`

const Form: React.FC = () => {
  return <>
    <LoginForm>
      <Div>Bem vindo(a) de volta!</Div>
      <Div primary>Acesse sua conta:</Div>
      <Input placeholder="Usuário"></Input>
      <Input placeholder="Senha" secondary></Input>
      <CheckBox name="Checkbox1" type="checkbox" ></CheckBox>
      <Div checkbox> Salvar login</Div>
      <Ref href="default.asp" target="_blank">Esqueci a senha</Ref>
      <Button>Entrar</Button>
      <Ref href="default.asp" target="_blank" register>Cadastre-se</Ref>
      <Div registerInfo> Ainda não tem login?</Div>
    </LoginForm>
  </>
    ;
}

export default Form;