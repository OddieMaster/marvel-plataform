import React from 'react';
import { FirstBackground, ContainerInfo, InfoBackground, Title, Description, Details } from './MovieInformationElements'

interface Props {
    description: string;
    title: string;    
    hero: string;
}
const MovieInformation: React.FC<Props> = (props) => {
    const { description, title, hero } = props;      
    return <>
        <ContainerInfo>
            <FirstBackground hero={hero}>
                <InfoBackground >
                    <Title>{title}</Title>
                    <Description>{description}</Description>   
                    <Details>ver detalhes</Details>            
                </InfoBackground>
            </FirstBackground>
        </ContainerInfo>
    </>;
}

export default MovieInformation;