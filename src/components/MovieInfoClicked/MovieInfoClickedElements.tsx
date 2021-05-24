import styled, {css} from 'styled-components'
import ZeroStar from './../../assets/0tar.png'
import OneStar from './../../assets/1tar.png'
import TwoStar from './../../assets/2tar.png'
import ThreeStar from './../../assets/3tar.png'
import FourStar from './../../assets/4tar.png'
import FiveStar from './../../assets/5tar.png'
import CloseButton from './../../assets/closeButton.png'


interface StarProps {
    stars: number;
}
interface Sided {
    leftSide?: boolean;
}


const handleStarsType = (stars: number) => {

    switch (stars) {
        case 0:
            return ZeroStar;

        case 1:
            return OneStar;

        case 2:
            return TwoStar;

        case 3:
            return ThreeStar;

        case 4:
            return FourStar;

        case 5:
            return FiveStar;
    }
}

export const ContainerInfo = styled.div`
display: flex;
width: 100vw;
height: 439px;
justify-content: flex-start;
margin-left: 132px;
background: pink;
`

export const PhotoBackground = styled.div<Sided>`
display: flex;
width: 289px;
height: 439px;
justify-content: flex-start;
${({ leftSide }) => leftSide &&
        css`
        margin-bottom: 50px;
     }`}
`
export const RedBackground = styled.div`
display: flex;
background: red;
width: 650px;
height: 439px;
justify-content: flex-start;
border-radius: 35px;
`
export const DescriptionsContainer = styled.div`
display: flex;
background: red;
width: 360px;
height: 439px;
justify-content: space-around;
border-radius: 35px;
flex-direction: column;
`

export const TitleClicked = styled.p`
display: flex;
color: white;
font-size: 30px;
align-self: center;
`
export const Aparitions = styled.p`
display: flex;
color: white;
font-size: 18px;
align-self: center;
display: inline-block;
`
export const AvaliationTitle = styled.p`
display: flex;
color: white;
font-size: 26px;
align-self: center;
`
export const Stars = styled.div<StarProps>`
display: flex;
background-color: red;
background-image:url(${({ stars }) => handleStarsType(stars)});
height: 50px;
width: 120px;
position: relative;
align-self: center;
`

export const CloseDetailsButton = styled.button`
display: flex;
  width: 40px;
  position: relative;
  align-self: flex-end;
  height: 40px;    
  margin-left: 300px;
  margin-bottom: 10px;
  background: url(${CloseButton}); 
  border:none!important;
  ;

`