import React from 'react';
import { Link } from 'react-router-dom';
import { FirstBackground, ContainerInfo, InfoBackground, Title, Description, Details } from './MovieInformationElements'

interface Props {
    description: string;
    title: string;    
    hero: string;  
    heroPosition: string; 
    smallText: boolean;
    setValue: any;
}

const MovieInformation: React.FC<Props> = (props) => {
    const { description, title, hero, heroPosition, smallText, setValue } = props;      
    return <>
        <ContainerInfo>            
            <FirstBackground hero={hero} >
                <InfoBackground >
                    <Title>{title}</Title>
                    <Description smallText={smallText}>{description}</Description>   
                    <Link to={heroPosition}  style={{ textDecoration: 'none' }}><Details onClick={()=> setValue(1)}>ver detalhes</Details> </Link>    
                    {console.log(hero)}       
                </InfoBackground>
            </FirstBackground>
        </ContainerInfo>
    </>;
}

export default MovieInformation;