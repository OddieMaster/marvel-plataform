import React from 'react';
import MovieInfoClicked from '../MovieInfoClicked';
import NavBar from '../NavBar/index';
import {Container } from '../../pages/Personages/PersonagesElements'



const PersonagesInfoRight: React.FC = () => {
  return <>
        <NavBar></NavBar>
        <Container>
        <MovieInfoClicked leftSide={false} title={"Homem-Aranha"} aparitions={"Homem-Aranha 1"} aparitions2={"Homem-Aranha 2"} aparitions3={"Homem-Aranha 3"} aparitions4={"Vingadores"} aparitions5={"Vingadores Ultimato"}  stars={3} hero={"homemaranha"}></MovieInfoClicked>       
        </Container>
  </>;
}

export default PersonagesInfoRight;