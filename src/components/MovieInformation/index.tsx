import React from 'react';
import { Link } from 'react-router-dom';
import { FirstBackground, ContainerInfo, InfoBackground, Title, Description, Details } from './MovieInformationElements'

interface Props {
    description: string;
    title: string;    
    hero: string;  
    heroPosition: string; 
    smallText: boolean;
}

const MovieInformation: React.FC<Props> = (props) => {
    const { description, title, hero, heroPosition, smallText } = props;      
    return <>
        <ContainerInfo>            
            <FirstBackground hero={hero} >
                <InfoBackground >
                    <Title>{title}</Title>
                    <Description smallText={smallText}>{description}</Description>   
                    <Link to={heroPosition}  style={{ textDecoration: 'none' }}><Details >ver detalhes</Details> </Link>           
                </InfoBackground>
            </FirstBackground>
        </ContainerInfo>
    </>;
}

export default MovieInformation;