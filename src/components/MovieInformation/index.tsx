import React from 'react';
import { FirstBackground, ContainerInfo, InfoBackground, Title, Description, Details } from './MovieInformationElements'

interface Props {
    description: string;
    title: string;    
    hero: string;    
    smallText: boolean;    
    addControl: any;
    control: number;
}

const MovieInformation: React.FC<Props> = (props) => {
    const { description, title, hero,  smallText, control, addControl } = props;      
    return <>
        <ContainerInfo>            
            <FirstBackground hero={hero} >
                <InfoBackground >
                    <Title>{title}</Title>
                    <Description smallText={smallText}>{description}</Description>   
                    <Details onClick={()=> addControl(control)}>ver detalhes</Details>    
                    {console.log(control)}       
                </InfoBackground>
            </FirstBackground>
        </ContainerInfo>
    </>;
}

export default MovieInformation;