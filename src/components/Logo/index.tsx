import React from 'react';
import { Marvel, Rectangle, Container } from './LogoElements';

interface navBar {
    Active?: boolean;
}

const Logo: React.FC<navBar> = (props) => {
    const Active = props;
    return <div >
        <Container>
            <Rectangle {...Active ? Active : null} />
            <Marvel {...Active ? Active : null} >Marvel</Marvel>
        </Container>
    </div>;
}

export default Logo;