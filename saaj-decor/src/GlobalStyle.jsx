import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
   /* All Colore */
  --decsColor:rgba(30,55,90,.7);;
  --titleColor:#1e375a;;
  --btnColor:#00ABE4;
  --bgcolor:#E9F1FA;
  --hoverColor:#dee6f4;
   /* All Fonts */
}
  *{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Roboto', sans-serif;
  color:var(--textcolor)
  }
  ul{
  list-style:none;
  padding:0;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  .container{
    width: 100%;
    padding: 0 60px;
    color: var(--decsColor);
    font-size: 1rem;
  }
  .btn{
    padding: 16px 20px;
    font-size: 18px;
    border-radius: 8px;
    background-color: var(--btnColor);
    color: #fff;
    border: none;
    display: inline-block;
    opacity: .7;
    transition:all .3s linear;
  }
  .btn:hover{
    opacity:1
  }

`;
