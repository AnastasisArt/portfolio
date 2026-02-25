"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.bg ?? "var(--background)"};
    color: ${({ theme }) => theme.colors.primary ?? "var(--foreground)"};
    font-family: var(--font-work), system-ui, sans-serif;
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    margin: 0;
  }

  h1 {
    font-family: var(--font-turret), system-ui, sans-serif;
    font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin: 0;
    line-height: 1;
  }

  h2 {
    font-family: var(--font-turret), system-ui, sans-serif;
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    margin: 0;
  }

  p {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    margin: 0;
    white-space: pre-line;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary ?? "inherit"};
    text-decoration: none;
  }
`;
