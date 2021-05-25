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
height:439px;
justify-content: center;
background:linear-gradient(90deg, rgba(145,29,29,0) 0%, rgba(255,0,0,0) 50%, rgba(145,29,29,0) 100%);
flex-direction: row;
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
export const RedBackground = styled.div<Sided>`
display: flex;
 background: linear-gradient(90deg, rgba(145,29,29,1) 0%, rgba(255,0,0,1) 50%, rgba(145,29,29,1) 100%); 
width: 650px;
height: 439px;
justify-content: flex-start;
border-radius: 35px;

${({ leftSide }) => leftSide &&
        css`
        align-self: flex-end;
        margin-bottom: 50px;
     }`}
`
export const DescriptionsContainer = styled.div`
display: flex;
 background: linear-gradient(90deg, rgba(42,0,255,0) 0%, rgba(255,0,0,0) 35%, rgba(255,255,255,0) 100%);
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
background-image:url(${({ stars }) => handleStarsType(stars)});
height: 50px;
width: 120px;
position: relative;
align-self: center;
right: 40px;
bottom: 30px;
`

export const CloseDetailsButton = styled.button`
display: flex;
  width: 30px;
  position: relative;
  align-self: flex-end;
  height: 30px;    
  margin-left: 300px;
  bottom: 10px;
  right: 15px;
  background: url(${CloseButton}); 
  border:none!important;
  ;

`