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
 }
 & > a {
  text-decoration: none;
}
`;

export default GlobalStyles;
