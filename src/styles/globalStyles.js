import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   font-size: 0.75rem;
   box-sizing:border-box;
   outline:none;
   border:none;
   background-color: #fafafa;
   max-width: 100%;
   ion-icon {
    font-size: 2rem;
  }
  
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
 }

`;

export default GlobalStyles;
