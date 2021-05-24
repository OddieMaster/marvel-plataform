import React from 'react';
import { Link } from "react-router-dom";
import { Container3, Container2, Container, Div, Input, CheckBox, Ref, Button } from './FormElements';


const Form: React.FC = () => {
  return <>
    <Container>
      
        <Div>Bem vindo(a) de volta!</Div>
        <Div primary>Acesse sua conta:</Div>
        <Input placeholder="Usuário"></Input>
        <Input placeholder="Senha" secondary></Input>
      <Container2>
        <CheckBox name="Checkbox1" type="checkbox" ></CheckBox>
        <Div checkbox> Salvar login</Div>
        <Ref href="default.asp" target="_blank">Esqueci a senha</Ref>
      </Container2> 
        <Link to="/Personages"><Button>Entrar</Button></Link>
      <Container3>
        <Div registerInfo> Ainda não tem login?</Div>
        <Ref href="default.asp" target="_blank" register>Cadastre-se</Ref>        
      </Container3>
    </Container>
  </>
    ;
}

export default Form;