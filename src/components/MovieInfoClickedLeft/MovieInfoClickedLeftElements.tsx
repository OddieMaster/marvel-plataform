import styled from 'styled-components'
import HomemAranha from '../../assets/homemaranhaFINAL.jpg'
import Thanos from '../../assets/thanosFINAL.jpg'
import Wanda from '../../assets/wandaFINAL.jpg'
import Hulk from '../../assets/hulkFINAL.jpg'

interface HeroProps {
    hero: string;

}


export const ContainerInfo = styled.div`
display: flex;
width: 289px;
height: 439px;
`

const handleBackgroundType = (hero: string) => {

    switch (hero) {
        case "homemaranha":
            return HomemAranha;

        case "wanda":
            return Wanda;

        case "thanos":
            return Thanos;
            
        case "hulk":
            return Hulk;
    }
}
export const ContainerInfoLeft = styled.div`
display: flex;
width: 100vw;
height: 439px;
`

export const FirstBackgroundLeft = styled.div<HeroProps>`
display: flex;
background-color: red;
background-image:url(${({ hero }) => handleBackgroundType(hero)});
height: 439px;
position: relative;
border-radius: 35px;
justify-content: flex-end;
`


export const RedBackgroundLeft = styled.div`
display: flex;
background: red;
width: 650px;
height: 439px;
justify-content: flex-end;

border-radius: 35px;

`
export const PhotoBackgroundLeft = styled.div`
display: flex;
width: 289px;
height: 439px;

`
