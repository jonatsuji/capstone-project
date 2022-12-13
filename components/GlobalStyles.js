import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   
   :root{
    --color-beige: #F7F3E3;
    --color-brown: #564138;
    
   }
   
   html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background-color: var(--color-beige);
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
