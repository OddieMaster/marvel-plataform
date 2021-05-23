import styled from 'styled-components'
import HomemAranha from '../../assets/homemaranhaFINAL.jpg'
interface HeroProps {
    hero: string;  
}

export const ContainerInfo = styled.div`
display: flex;
width: 289px;
height: 439px;
`

const handleBackgroundType = (hero:string) => {

    switch (hero) {
        case "homemaranha":
            return HomemAranha;

        case "wanda":
            return "blue";
            
        case "thanos":
            return "green";
    }
}

export const FirstBackground = styled.div<HeroProps>`
display: flex;
background-color: red;
background-image:url(${({hero})=> handleBackgroundType(hero)});
width: 289px;
height: 439px;
position: relative;
border-radius: 35px;
`

export const InfoBackground = styled.div`
display: flex;
background-color: red;
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
margin-top: 43px;
font-size: 20px;
border:none!important;

`
export const Title = styled.p`
display: flex;
color: white;
font-size: 22px;
margin-bottom: 10px;
margin-top: 30px;
`
export const Description = styled.p`
display: flex;
color: white;
font-size: 15px;
margin-top: -5px;
margin-left: 10px;
margin-right: 3px;
`