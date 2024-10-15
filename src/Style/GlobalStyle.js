import { createGlobalStyle } from "styled-components";

import FontTitle from '../fonts/big_noodle_titling.ttf';


const GlobalStyles = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
     }

     @font-face {
    font-family: 'Title';
    src: url(${FontTitle}) format('truetype');   
  }

  .hide{
    display: none !important;
  }
`

export default GlobalStyles;