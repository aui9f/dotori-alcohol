import { RouterProvider } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getIsLoading } from "./api/atom";
import Loading from "./components/Loading";
import Router from "./Router";
import { GlobalStyle } from "../src/assets/styled/GlobalStyle";
function App() {
  const [isLoading] = useRecoilState(getIsLoading);
  return (
    <>
      <GlobalStyle />
      {isLoading ? <Loading /> : null}
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
