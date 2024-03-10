import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
const Contents = styled.div`
  margin-top: 96px;
`;
export default function Layout() {
  return (
    <>
      <Header />
      <Contents>
        <Outlet />
      </Contents>
    </>
  );
}
