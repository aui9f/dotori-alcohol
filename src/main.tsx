import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
// Create a client
const queryClient = new QueryClient();
const GlobalStyled = createGlobalStyle`
  ${reset};
  *{
    color: #2f2f2f;
  }
   a {
    text-decoration: none; 
    outline: none;
    color: #2f2f2f;
    &:hover, &:active {
      text-decoration: none; 
    }
  } 

`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyled />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
