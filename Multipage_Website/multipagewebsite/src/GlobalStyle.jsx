import { createGlobalStyle } from "styled-components";

export const Globalstyle= createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

 html{
    font-size: 62.5%;
    overflow-x: hidden;
 } 
 h1{
    color:${({theme})=>theme.colors.heading};
    font-size: 6rem; 
    font-weight: 900;
 }
 h2{
    color:${({theme})=>theme.colors.heading};
    font-size: 4.4rem; 
    font-weight: 300;
    white-space: normal;
    text-align: center;

 }
 h3{
    font-size: 1.8rem;
    font-weight: 400;
 }
 p{
    color:${({theme})=>theme.colors.text};
    opacity: 0.7;
    font-size: 1.65rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 1rem;

 }
 a{
    text-decoration: none;
 }
 
`