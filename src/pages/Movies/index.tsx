import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { ContainerSelect, Select } from './MoviesElements';
import MovieInformation from '../../components/MovieInformation';
import { ContainerCards, ContainerButton, BackButton, Button, ContainerOpacity, ContainerAbsolute } from '../Personages/PersonagesElements';

interface MoviesValues {
  selectedValue: string;
  
}


const Movies: React.FC<MoviesValues> = () => {
  const [value, setValue] = useState<string>("");
  var display = false;
  const handleChange = (event: any) => {
    setValue(event.target.value);
    console.log(value)
  };
  
  return <>
    <NavBar></NavBar>
    <ContainerSelect>
      <Select id="list" onChange={handleChange}>
        <option value="" selected disabled hidden >Filtrar por:</option>
        <option value="Lançamento">Lançamento</option>
        <option value="Cronologia">Cronologia</option>
      </Select>
    </ContainerSelect> 

  </>;
}

export default Movies;