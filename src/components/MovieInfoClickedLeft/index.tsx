import React from 'react';

import { ContainerInfoLeft, PhotoBackgroundLeft, FirstBackgroundLeft, RedBackgroundLeft } from './MovieInfoClickedLeftElements';


// import { Container } from './styles';
interface Props {
  hero: string;
  }
const MovieInfoClickedLeft: React.FC<Props> = (props) => {
  const {hero} = props;
  return <>
  <ContainerInfoLeft>
    <RedBackgroundLeft>
    <FirstBackgroundLeft hero={hero}>
    <PhotoBackgroundLeft />
    </FirstBackgroundLeft>
    </RedBackgroundLeft>  
  </ContainerInfoLeft>
    
  </>
}

export default MovieInfoClickedLeft;