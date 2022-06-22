import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './css/global.css';
import './css/button.css';
import './css/wrapbox.css';
import './css/view.css';

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
`;

export default GlobalStyle;