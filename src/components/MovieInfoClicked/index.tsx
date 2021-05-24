import React from 'react';
import { Link } from 'react-router-dom';
import { FirstBackground } from '../MovieInformation/MovieInformationElements'
import { ContainerInfoRight, PhotoBackground, RedBackground, TitleClicked, Aparitions, DescriptionsContainer, AvaliationTitle, Stars, CloseDetailsButton } from './MovieInfoClickedElements'
interface Props {
  hero: string;
  title: string;
  aparitions: string;
  aparitions2?: string;
  aparitions3?: string;
  aparitions4?: string;
  aparitions5?: string;
  stars: number;
}
const MovieInfoClicked: React.FC<Props> = (props) => {
  const { hero, title, aparitions, aparitions2, aparitions3, aparitions4, aparitions5, stars } = props;
  return <>
    <ContainerInfoRight>
      <RedBackground>
        <FirstBackground hero={hero}>
          <PhotoBackground></PhotoBackground>
        </FirstBackground>
        <DescriptionsContainer>
          <TitleClicked>{title} </TitleClicked>
          <Aparitions>Aparições:<br></br>{aparitions}<br></br>{aparitions2}<br></br>{aparitions3}<br></br>{aparitions4}<br></br>{aparitions5}</Aparitions>
          <AvaliationTitle>Avaliação dos Fãs</AvaliationTitle>
          <Stars stars={stars}></Stars>
          <Link to="/Personages"  style={{ textDecoration: 'none', border:'none' }}><CloseDetailsButton /></Link>
        </DescriptionsContainer>
      </RedBackground>
    </ContainerInfoRight>
  </>;
}

export default MovieInfoClicked;