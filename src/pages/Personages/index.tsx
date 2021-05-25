import React, { useState } from 'react';
import MovieInformation from '../../components/MovieInformation';
import NavBar from '../../components/NavBar/index';
import { ContainerCards, ContainerButton, BackButton, Button, ContainerOpacity, ContainerAbsolute } from './PersonagesElements';
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
  },
  {
    title: "Hulk",
    description: "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar",
    hero: "hulk",
    heroPosition: "/PersonagesInfoRight",
    smallText: false,
    id: 4,
    detailedName: "Hulk",
    aparition1: "Vingadores",
    aparition2: "Vingadores - Era de Ultron",
    aparition3: "Thor - Ragnarok",
    aparition4: "Vingadores - Guerra Infinita",
    aparition5: "Vingadores - Ultimato",
    stars: 4
  }
]


const Personages: React.FC<Props> = () => {
  const [value, setValue] = useState<number>(0);
  const [opacity, setOpacity] = useState<boolean>(false);
  const [firstPage, setfisrtPage] = useState<boolean>(true);



  function addControl(value: number) {
    console.log("entrou na função carai " + value)
    setValue(value)
    if (value === 0) { setOpacity(false) }
    else setOpacity(true)
  }

  function secondPage(value: number) {
    if (value === 0) {
      setfisrtPage(false)
    }
    else setfisrtPage(true)
  }


  return <>

    {display === false && (<>

      <NavBar Opacity={opacity} />
      <ContainerButton>
        {firstPage === true && (<>
          <ContainerCards>
            {data.map((row) => row.id < 4 && (
              <MovieInformation smallText={row.smallText} title={row.title} description={row.description} hero={row.hero} addControl={addControl} control={row.id} key={row.id} />))}
          </ContainerCards>
          <Button onClick={() => secondPage(0)}></Button>
        </>)}
        {firstPage === false && (<>
          <BackButton onClick={() => secondPage(1)}></BackButton>
          <ContainerCards>
            {data.map((row) => row.id > 1 && (
              <MovieInformation smallText={row.smallText} title={row.title} description={row.description} hero={row.hero} addControl={addControl} control={row.id} key={row.id} />))}
          </ContainerCards>
        </>)}
      </ContainerButton>
    </>)}
    {firstPage === true && (<>
      {display === false && value === 1 && (<>

        <ContainerOpacity />
        <ContainerAbsolute left>
          {data.map(row => row.id === value && (
            <MovieInfoClicked hero={row.hero} title={row.detailedName} aparitions={row.aparition1} aparitions2={row.aparition2} aparitions3={row.aparition3} aparitions4={row.aparition4} aparitions5={row.aparition5} stars={row.stars} leftSide={false} addControl={addControl} />))}
        </ContainerAbsolute>

      </>)}
    </>)}
    {firstPage === false && (<>
      {display === false && value === 2 && firstPage === false && (<>

        <ContainerOpacity />
        <ContainerAbsolute left>
          {data.map(row => row.id === value && (
            <MovieInfoClicked hero={row.hero} title={row.detailedName} aparitions={row.aparition1} aparitions2={row.aparition2} aparitions3={row.aparition3} aparitions4={row.aparition4} aparitions5={row.aparition5} stars={row.stars} leftSide={true} addControl={addControl} />))}
        </ContainerAbsolute>
      </>)}
    </>)}
    {display === false && value === 2 && (<>

      <ContainerOpacity />
      <ContainerAbsolute middle>
        {data.map(row => row.id === value && (
          <MovieInfoClicked left hero={row.hero} title={row.detailedName} aparitions={row.aparition1} aparitions2={row.aparition2} aparitions3={row.aparition3} aparitions4={row.aparition4} aparitions5={row.aparition5} stars={row.stars} leftSide={true} addControl={addControl} />))}
      </ContainerAbsolute>
    </>)}
    {display === false && value === 3 && (<>
      <ContainerOpacity />
      <ContainerAbsolute right>
        {data.map(row => row.id === value && (
          <MovieInfoClicked left hero={row.hero} title={row.detailedName} aparitions={row.aparition1} aparitions2={row.aparition2} aparitions3={row.aparition3} aparitions4={row.aparition4} aparitions5={row.aparition5} stars={row.stars} leftSide={true} addControl={addControl} />))}
      </ContainerAbsolute>
    </>)}


  </>
}

export default Personages; 