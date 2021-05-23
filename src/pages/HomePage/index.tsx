import React from 'react';
import MovieInformation from '../../components/MovieInformation';
import NavBar from '../../components/NavBar/index'

const HomePage: React.FC = () => {
  return <>
    <NavBar></NavBar>
    <MovieInformation title={"testando"} description={"testando"} />
  </>
}

export default HomePage;