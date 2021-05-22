import { createGlobalStyle } from 'styled-components';
import MarvelRegular from './types/MarvelRegular-Dj83.ttf';


declare module '*.ttf';
declare module '*.otf';
declare module '*.css';


export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Marvel';
        src: url(${MarvelRegular});
        
    }
`;