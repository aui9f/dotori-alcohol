import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
const Head = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 8px;
  background-color: #9f8473;
`;
const Logo = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 12px;
`;
const Title = styled.h1`
  color: #ffffff;
  font-size: 1.4rem;
`;
const Nav = styled.nav`
  height: 48px;
  display: flex;
  align-items: center;
`;
const Menu = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Item = styled.li<{ isActive: string }>`
  margin: 0 12px;
  a {
    color: ${(props) => (props.isActive === "active" ? "#FFFFFF" : "#dddddd")};
    font-weight: ${(props) => (props.isActive === "active" ? "bold" : "")};
  }
`;

const User = styled.div`
  margin: 0 12px;
`;
const Button = styled.button`
  border: 1px solid #dddddd;
  background-color: transparent;
  padding: 4px 8px;
  border-radius: 4px;
  color: #dddddd;
  cursor: pointer;
`;

export default function Header() {
  const nav = useLocation();
  const pathname = nav.pathname;
  return (
    <Head>
      <Logo>
        <Title>술 만드는 사람들</Title>
      </Logo>
      <Nav>
        <Menu>
          <Item isActive={pathname === "/offline" ? "active" : ""}>
            <Link to="/offline">현실공간</Link>
          </Item>
          <Item isActive={pathname === "/information" ? "active" : ""}>
            <Link to="/information">정보</Link>
          </Item>
          <Item isActive={pathname === "/" ? "active" : ""}>
            <Link to="/">가양주</Link>
          </Item>
          <Item isActive={pathname === "/mypage" ? "active" : ""}>
            <Link to="/mypage">내정보</Link>
          </Item>
        </Menu>
        <User>
          <Button>LOGIN</Button>
        </User>
      </Nav>
    </Head>
  );
}
