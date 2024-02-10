import { createGlobalStyle } from 'styled-components';

const GlobalFonts = createGlobalStyle`
    /*
        font-family: 'Noto Sans KR', sans-serif;
    */

    /* LeeSeoyun FONT CDN - TITLE */
    @font-face {
    font-family: 'LeeSeoyun';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

`;

export default GlobalFonts;
