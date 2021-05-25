import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { ContainerSelect, Select } from './MoviesElements';
import { Pzim } from '../HQs/HQsElements'
interface MoviesValues {
  selectedValue: string;
}

const Movies: React.FC<MoviesValues> = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
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
    {value === "Cronologia" && (<>
      <Pzim>Cards da cronologia</Pzim> </>)}
    {value === "Lançamento" && (<>
      <Pzim>Cards de lançamento</Pzim> </>)}
  </>;
}

export default Movies;