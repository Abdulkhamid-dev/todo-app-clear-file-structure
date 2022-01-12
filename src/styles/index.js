import { createGlobalStyle } from 'styled-components';
import  {STYLING_CONFIGS}  from '../constants';

export default createGlobalStyle`
  :root {
    font-size: ${STYLING_CONFIGS.ROOT_SIZE}px;
    font-family: 'Source Sans Pro', 'Open sans', Arial, sans-serif;
  }
`;