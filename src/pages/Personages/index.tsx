import React, { useState } from 'react';
import MovieInformation from '../../components/MovieInformation';
import NavBar from '../../components/NavBar/index';
import { Container, Button, ContainerAbsolute  } from './PersonagesElements';
import MovieInfoClicked from '../../components/MovieInfoClicked'
interface Props {
  display?: boolean;
  addControl: any;
  data: object;
  control: number;
}

const display = false;
const data = [
  {
    title: "Homem-Aranha",
    description: "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, e Homem-Aranha.",
    hero: "homemaranha",
    heroPosition: "/PersonagesInfoLeft",
    smallText: true,
    id: 1,
    detailedName: "Peter-Parker",
    aparition1: "Homem-Aranha 1",
    aparition2: "Homem-Aranha 2",
    aparition3: "Homem-Aranha 3",
    aparition4: "Vingadores - Guerra Infinita",
    aparition5: "Vingadores - Ultimato",
    stars: 3
  },
  {
    title: "Thanos",
    description: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
    hero: "thanos",
    heroPosition: "/PersonagesInfoMiddle",
    smallText: false,
    id: 2,
    detailedName: "Thanos",
    aparition1: "Vingadores",
    aparition2: "Guardiões da Galáxia - vol. l",
    aparition3: "Vingadores - Guerra Infinita",
    aparition4: "Vingadores - Ultimato",
    stars: 5

  },
  {
    title: "Wanda",
    description: "Wanda Maximoff foi sequestrada da Sérvia e tradiza para a monha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
    hero: "wanda",
    heroPosition: "/PersonagesInfoRight",
    smallText: false,
    id: 3,
    detailedName: "Wanda Maximoff",
    aparition1: "Vingadores - Era de Ultron",
    aparition2: "Capitão América - Guerra Civil",
    aparition3: "Vingadores - Guerra Infinita",
    aparition4: "Vingadores - Ultimato",
    aparition5: "WandaVision",
    stars: 4
  }
]


const Personages: React.FC<Props> = () => {
  const [value, setValue] = useState<number>(0);

  function addControl(value: number) {
    console.log("entrou na função carai " + value)
    setValue(value)
  }
  console.log(value)
  return <>
      
      {display === false && (<>
        <NavBar />
        <Container>
          {data.map((row) => (
            <MovieInformation smallText={row.smallText} title={row.title} description={row.description} hero={row.hero} addControl={addControl} control={row.id} key={row.id} />))}
          <Button></Button>
        </Container>
      </>)}
      
      {display === false && value === 1 && (<>
        <ContainerAbsolute>
        
        <Container>
          {data.map(row => row.id === value && (
            <MovieInfoClicked hero={row.hero} title={row.detailedName} aparitions={row.aparition1} aparitions2={row.aparition2} aparitions3={row.aparition3} aparitions4={row.aparition4} aparitions5={row.aparition5} stars={row.stars} leftSide={false} addControl={addControl} />))}
        </Container>
        </ContainerAbsolute>
      </>)}
      {display === false && value === 2 && (<>
        <Container>
          {data.map(row => row.id === value && (
            <MovieInfoClicked hero={row.hero} title={row.detailedName} aparitions={row.aparition1} aparitions2={row.aparition2} aparitions3={row.aparition3} aparitions4={row.aparition4} aparitions5={row.aparition5} stars={row.stars} leftSide={true} addControl={addControl} />))}
        </Container>
      </>)}
      {display === false && value === 3 && (<>
        <Container>
          {data.map(row => row.id === value && (
            <MovieInfoClicked hero={row.hero} title={row.detailedName} aparitions={row.aparition1} aparitions2={row.aparition2} aparitions3={row.aparition3} aparitions4={row.aparition4} aparitions5={row.aparition5} stars={row.stars} leftSide={true} addControl={addControl} />))}
        </Container>
      </>)}
      
  </>
}

export default Personages; 