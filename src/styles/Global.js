import { createGlobalStyle } from 'styled-components';
import { HeeboFont } from './Fonts';
import blueBg from '../images/vivid-blurred-colorful-wallpaper-background.jpg';

export default createGlobalStyle`
 ${HeeboFont}

    html{
    scroll-behavior: smooth;
    };

    body{
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        background: url(${blueBg});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        font-family: 'Heebo', sans-serif;
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }
`;
