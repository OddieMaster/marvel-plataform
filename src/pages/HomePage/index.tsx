import React from 'react';
import MovieInformation from '../../components/MovieInformation';
import NavBar from '../../components/NavBar/index'

const HomePage: React.FC = () => {
  return <>
    <NavBar></NavBar>
    <MovieInformation title={"Homem-Aranha"} description={"Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, e Homem-Aranha"} hero={"homemaranha"} />
   
  </>
}

export default HomePage;