import styled, { css } from "styled-components";

interface navBar {
    Active?: boolean;
}
export const Container = styled.div<navBar>`
padding: 1.0rem;
align-items: flex-start;
`;

export const Marvel = styled.div<navBar>`
color: white;
font-size: 12.0rem;
width: 403px;
height: 133px;
position: absolute;
${({ Active }) => Active &&
        css`
        font-size: 5.0rem;
        width: 403px;
        height: 133px;
     }`}
`;


export const Rectangle = styled.div<navBar>`
background-color: red;
width: 237px;
height: 95px;
position: absolute;
${({ Active }) => Active &&
        css`        
        width: 100px;
        height: 60px;
     }`}
`;

