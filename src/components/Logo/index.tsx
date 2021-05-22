import React from 'react';
import { Marvel } from '../../styles/themes/marvel';
import { Rectangle } from '../../styles/themes/rectangle';
import styled from "styled-components";


const Div = styled.div`
position: relative;
top: -250px;
`

const Logo: React.FC = () => {
    return <div >
        <Div>

        <Rectangle />        
        <Marvel>Marvel</Marvel>
        
        </Div>
    </div>;
}

export default Logo;