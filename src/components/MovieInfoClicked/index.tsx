import React from 'react';
import { FirstBackground } from '../MovieInformation/MovieInformationElements'
import { ContainerInfo, PhotoBackground, RedBackground, TitleClicked, Aparitions, DescriptionsContainer, AvaliationTitle, Stars, CloseDetailsButton } from './MovieInfoClickedElements'

interface Props {
  hero: string;
  title: string;
  aparitions: string;
  aparitions2?: string;
  aparitions3?: string;
  aparitions4?: string;
  aparitions5?: string;
  stars: number;
  leftSide: boolean;
  addControl: any;
  left?:boolean;
}
const MovieInfoClicked: React.FC<Props> = (props) => {
  const { hero, title, aparitions, aparitions2, aparitions3, aparitions4, aparitions5, stars, leftSide, addControl, left } = props;
  return <>
    <ContainerInfo>
      <RedBackground>
        <FirstBackground left={left} hero={hero}>
          <PhotoBackground leftSide={leftSide}></PhotoBackground>
        </FirstBackground>
        <DescriptionsContainer>
          <TitleClicked>{title} </TitleClicked>
          <Aparitions>Aparições:<br></br>{aparitions}<br></br>{aparitions2}<br></br>{aparitions3}<br></br>{aparitions4}<br></br>{aparitions5}</Aparitions>
          <AvaliationTitle>Avaliação dos Fãs</AvaliationTitle>
          <Stars stars={stars}></Stars>
         <CloseDetailsButton  onClick={()=> addControl(0)} />
        </DescriptionsContainer>
      </RedBackground>
    </ContainerInfo>
  </>;
}

export default MovieInfoClicked;