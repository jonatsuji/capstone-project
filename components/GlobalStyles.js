import { createGlobalStyle } from "styled-components";
//import { Dosis } from "../assets/fonts/Dosis/static/Dosis-Regular.ttf";

const GlobalStyles = createGlobalStyle`
   
   :root{
    --color-beige: #F7F3E3;
    --color-brown: #564138;
    
   }
   
   html,
    body {
        padding: 0;
        margin: 0;
        font-family: Dosis;
        background-color: var(--color-beige);
        background-image: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(89, 62, 148, 0.6726891440169818) 32%,
      rgba(0, 212, 255, 0.3981793400954131) 49%,
      rgba(255, 255, 255, 0) 100%
    ),
    url("/images/sandstone-bright-crack.jpg");
  background-size: cover;
  background-attachment: fixed;
        
    }

    * {
        box-sizing: border-box;
        
        
    }

    @font-face { 
        font-family: Dosis;
        src: url("/assets/fonts/Dosis/static/Dosis-Regular.ttf") format('truetype');
        }
`;

export default GlobalStyles;

//background-image: var(--background-filter-toBottom),
//url(${(props) => props.image});
