// 전역 스타일(body, font 등)
// src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 100;
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.3.8/Pretendard-Thin.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.3.8/Pretendard-Regular.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.3.8/Pretendard-Medium.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 600;
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.3.8/Pretendard-SemiBold.woff2') format('woff2');
    }


    html, body {
        
    }

    #root {
        margin: 0 auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
    button:focus {
        outline: none;
    }

    /* 스크롤바 커스텀 */
    ::-webkit-scrollbar {
        width: 0px;
    }
`;

export default GlobalStyle;
