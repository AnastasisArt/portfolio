"use client";
import { createGlobalStyle } from "styled-components";
import { workSans } from '@/lib/fonts';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    max-width: 100vw;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.bg ?? "var(--background)"};
    color: ${({ theme }) => theme.colors.primary ?? "var(--foreground)"};
    font-family: ${workSans.style.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fw.medium};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${workSans.style.fontFamily};
  }
  
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.fs.sm};
    font-weight: ${({ theme }) => theme.typography.fw.regular};
    white-space: pre-line;
  }
  
  img, svg {
    display: block;
    max-width: 100%;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
