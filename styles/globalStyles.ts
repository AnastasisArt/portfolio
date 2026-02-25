"use client";
import { createGlobalStyle } from "styled-components";

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
    font-family: var(--font-work), system-ui, sans-serif;
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: var(--font-work), system-ui, sans-serif;
  }
  
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
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
