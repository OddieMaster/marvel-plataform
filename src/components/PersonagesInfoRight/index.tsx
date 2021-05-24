import React from 'react';
import MovieInfoClicked from '../MovieInfoClicked';
import NavBar from '../NavBar/index';
import {Container } from '../../pages/Personages/PersonagesElements'
import MovieInfoClickedLeft from '../MovieInfoClickedLeft';


const PersonagesInfoRight: React.FC = () => {
  return <>
        <NavBar></NavBar>
        <Container>
        <MovieInfoClicked title={"Homem-Aranha"} aparitions={"Homem-Aranha 1"} aparitions2={"Homem-Aranha 2"} aparitions3={"Homem-Aranha 3"} aparitions4={"Vingadores"} aparitions5={"Vingadores Ultimato"}  stars={5} hero={"homemaranha"}></MovieInfoClicked>
        <MovieInfoClickedLeft hero={"thanos"}></MovieInfoClickedLeft>
        </Container>
  </>;
}

export default PersonagesInfoRight;