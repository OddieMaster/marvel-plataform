import React from 'react';
import { Link } from 'react-router-dom';
import MovieInformation from '../../components/MovieInformation';
import NavBar from '../../components/NavBar/index';
import { Container, Button } from './PersonagesElements';

const Personages: React.FC = () => {
  return <>
  
    <NavBar />
    <Container>
      <MovieInformation smallText title={"Homem-Aranha"} description={"Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, e Homem-Aranha."} hero={"homemaranha"} heroPosition={"/PersonagesInfoLeft"} />
      <MovieInformation smallText={false} title={"Thanos"} description={"A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais."} hero={"thanos"}  heroPosition={"/PersonagesInfoMiddle"}/>
      <MovieInformation smallText={false} title={"Wanda"} description={"Wanda Maximoff foi sequestrada da Sérvia e tradiza para a monha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos."} hero={"wanda"}  heroPosition={"/PersonagesInfoRight"}/>
      <Link to="/PersonagesTwo"><Button></Button></Link>      
    </Container>

  </>
}

export default Personages; 