import styled, {css} from 'styled-components'
import HomemAranha from '../../assets/homemaranhaFINAL.jpg'
import Thanos from '../../assets/thanosFINAL.jpg'
import Wanda from '../../assets/wandaFINAL.jpg'
import Hulk from '../../assets/hulkFINAL.jpg'

interface HeroProps {
    hero: string;
    left?:boolean;
}
interface smallText {
    smallText: boolean;
}


export const ContainerInfo = styled.div`
display: flex;
width: 300px;
height: 439px;
background: red;
justify-content: center;
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


export const FirstBackground = styled.div<HeroProps>`
display: flex;
background:red;
background-image:url(${({ hero }) => handleBackgroundType(hero)});
height: 439px;
border-radius: 35px;
order: 0;
${({ left }) => left &&
        css`
        order: 1;
     }`}
`

export const InfoBackground = styled.div`
display: flex;
width: 289px;
height: 234px;
position: relative;
top: 205px;
border-radius: 35px;
flex-direction: column;
align-items: center;
background:  linear-gradient(0deg, rgba(255,0,0,0.2) 0%, rgba(255,0,0,0.25) 34%, rgba(255,0,0,1) 100%, rgba(250,0,0,0) 100%);
`

export const Details = styled.button`
display: flex;
color: white;
background-color: rgba(0,0,0,0.0);
margin-top: 20px;
font-size: 20px;
border:none!important;
align-self: center;


`
export const Title = styled.p`
display: flex;
color: white;
font-size: 22px;
margin-bottom: 10px;
margin-top: 30px;
font-family: system-ui;
`
export const Description = styled.p<smallText>`
display: flex;
color: white;
font-size: 14px;
margin-top: -5px;
font-family: system-ui;
margin-left: 10px;
margin-right: 3px;
${({ smallText }) => smallText &&
        css`
        margin-bottom: 50px;
     }`}
`