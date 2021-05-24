import React, { useState } from 'react';
import MovieInformation from '../../components/MovieInformation';
import NavBar from '../../components/NavBar/index';
import { Container, Button } from './PersonagesElements';

interface Props {
  display?: boolean;
  setValue?: number;
  data: object;
}

const display = false;
const data = [
  {
    title: "Homem-Aranha",
    description: "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, e Homem-Aranha.",
    hero: "homemaranha",
    heroPosition: "/PersonagesInfoLeft",
    smallText: true,
    id: 1
  },
  {
    title: "Thanos",
    description: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
    hero: "thanos",
    heroPosition: "/PersonagesInfoMiddle",
    smallText: false,
    id: 2
  },
  {
    title: "Wanda",
    description: "Wanda Maximoff foi sequestrada da Sérvia e tradiza para a monha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
    hero: "wanda",
    heroPosition: "/PersonagesInfoRight",
    smallText: false,
    id: 3
  }
]


const Personages: React.FC<Props> = () => {
  const [value, setValue] = useState<number>(0);



  return <>
    {display === false && (
      <>
        <NavBar />
        <Container>
          {data.map((row) => (
            <MovieInformation smallText={row.smallText} title={row.title} description={row.description} hero={row.hero} heroPosition={row.heroPosition} setValue={row.id} key={row.id} />
          ))}
          <Button></Button>
        </Container>
      </>
    )}
    {display === false && value === 1 && (<><MovieInformation smallText={false} title={"Wanda"} description={"Wanda Maximoff foi sequestrada da Sérvia e tradiza para a monha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos."} hero={"wanda"} heroPosition={"/PersonagesInfoRight"} setValue={setValue} />
      <Button></Button></>)}

  </>
}

export default Personages; 