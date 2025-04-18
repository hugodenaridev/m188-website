import { createGlobalStyle } from 'styled-components';
import { colors, typography, spacing } from './designSystem';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  html, body {
    width: 100%;
    overflow-x: hidden;
  }
  
  #root {
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  body {
    font-family: ${typography.fontFamily.primary};
    font-size: ${typography.fontSize.base};
    font-weight: ${typography.fontWeight.regular};
    line-height: ${typography.lineHeight.normal};
    color: ${colors.text.primary};
    background-color: ${colors.ui.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${typography.fontFamily.secondary};
    font-weight: ${typography.fontWeight.semiBold};
    line-height: ${typography.lineHeight.tight};
    color: ${colors.text.primary};
    margin-bottom: ${spacing[4]};
  }
  
  h1 {
    font-size: ${typography.fontSize['4xl']};
  }
  
  h2 {
    font-size: ${typography.fontSize['3xl']};
  }
  
  h3 {
    font-size: ${typography.fontSize['2xl']};
  }
  
  h4 {
    font-size: ${typography.fontSize.xl};
  }
  
  h5 {
    font-size: ${typography.fontSize.lg};
  }
  
  h6 {
    font-size: ${typography.fontSize.md};
  }
  
  p {
    margin-bottom: ${spacing[4]};
  }
  
  a {
    text-decoration: none;
    color: ${colors.primary.main};
    transition: color 0.2s ease;
    
    &:hover {
      color: ${colors.primary.light};
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  button, input, textarea, select {
    font-family: ${typography.fontFamily.primary};
    font-size: ${typography.fontSize.base};
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
  }
  
  ul, ol {
    list-style-position: inside;
    margin-bottom: ${spacing[4]};
  }
  
  section {
    padding: ${spacing[8]} 0;
    position: relative;
  }
  
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${spacing[4]};
  }
  
  .accent-font {
    font-family: ${typography.fontFamily.accent};
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-with-shadow {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

export default GlobalStyles; 