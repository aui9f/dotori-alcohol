import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  *{
    rc: url("@/fonts/NanumGothic.ttf") format("truetype");
    box-sizing: border-box;
    font-family: "NanumGothic";
    font-weight: normal;
 }

 html, body, div, span, object, iframe, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
     margin:0;
     padding:0;
     border:0;
     outline:0;
     font-size:100%;
     vertical-align:baseline;
     background:transparent;
     line-height: 1.4em;
 }
 
 
 body {
    font-size: 16px;
     
 }
  
 
 article,aside,details,figcaption,figure,
 footer,header,hgroup,menu,nav,section {
     display:block;
 }
 
 nav ul, ul li {
     list-style:none;
 }
 
 blockquote, q {
     quotes:none;
 }
 
 blockquote:before, blockquote:after,
 q:before, q:after {
     content:'';
     content:none;
 }
 
 a {
     margin:0;
     padding:0;
     font-size:100%;
     vertical-align:baseline;
     background:transparent;
     line-height: 1.4em;
 }

 p{
    line-height: 1.4em;
 }
 
 /* change colours to suit your needs */
 ins {
     background-color:#ff9;
     color:#000;
     text-decoration:none;
 }
 
 /* change colours to suit your needs */
 mark {
     background-color:#ff9;
     color:#000;
     font-style:italic;
     font-weight:bold;
 }
 
 del {
     text-decoration: line-through;
 }
 
 abbr[title], dfn[title] {
     border-bottom:1px dotted;
     cursor:help;
 }
 
 table {
     border-collapse:collapse;
     border-spacing:0;
 }
 
 /* change border colour to suit your needs */
 hr {
     display:block;
     height:1px;
     border:0;  
     border-top:1px solid #cccccc;
     margin:1em 0;
     padding:0;
 }
 
 input, select, button {
     vertical-align:middle;
     font-size: 16px;
 }



h1, h2, h3, h4, h5, h6{
    margin:0;
    padding:0;
    vertical-align:baseline;
    background:transparent;
 }

.h1,
h1 {
    font-size: 2rem;
}

.h2,
h2 {
    font-size: 1.8rem;
}

.h3,
h3 {
    font-size: 1.6rem;
}

.h4,
h4 {
    font-size: 1.4rem;
}

.h5,
h5 {
    font-size: 1.2rem;
}

.h6,
h6 {
    font-size: 1rem;
}


.small,
small {
    font-size: 80%;
    font-weight: 400
}


:root {
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
}

input{
    width: 100%;
    height: 40px;
    padding: 0 8px;
    border: 1px solid gray;
    border-radius: 4px;
    &::placeholder{
        font-size: 14px;
    }
  }
  textarea{
    width: 100%;
    height: 120px;
    padding: 0 8px;
    border: 1px solid gray;
    border-radius: 4px;
  }
button{
  height: 40px;
  border: 1px solid gray;
  border-radius: 4px;
}
`;
