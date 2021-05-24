import React from 'react';
import { Link } from 'react-router-dom';
import MovieInformation from '../../components/MovieInformation';
import NavBar from '../../components/NavBar/index';
import { Container, ButtonBack } from '../Personages/PersonagesElements';

const PersonagesTwo: React.FC = () => {
    return <>

        <NavBar />
        <Container>
            <Link to="/Personages"><ButtonBack></ButtonBack></Link>            
            <MovieInformation smallText={false} title={"Thanos"} description={"A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais."} hero={"thanos"} heroPosition={"/PersonagesInfoLeft"} />
            <MovieInformation smallText={false} title={"Wanda"} description={"Wanda Maximoff foi sequestrada da Sérvia e tradiza para a monha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos."} hero={"wanda"} heroPosition={"/PersonagesInforMiddle"} />
            <MovieInformation smallText={false} title={"Hulk"} description={"Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que atingido por raios gama enquanto salvava um adolescente durante o teste militar."} hero={"hulk"} heroPosition={"/PersonagesInfoRight"} />            
        </Container>
    </>;
}

export default PersonagesTwo;