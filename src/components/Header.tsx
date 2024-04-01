import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLogout } from "@/api/firestoreApi";
import { useSetRecoilState } from "recoil";
import { loginUserInfo } from "@/api/atom";
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
const Item = styled.li<{ isactive: string }>`
  margin: 0 12px;
  a,
  p {
    cursor: pointer;
    color: ${(props) => (props.isactive === "active" ? "#FFFFFF" : "#dddddd")};
    font-weight: ${(props) => (props.isactive === "active" ? "bold" : "")};
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

export default function Header({ isLogin }: { isLogin: boolean }) {
  const loginUser = useSetRecoilState(loginUserInfo);
  const navi = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;
  const login = () => {
    navi("/login");
  };

  const logout = async () => {
    await userLogout();
    await loginUser({
      uid: "",
      createdAt: 0,
      email: "",
      nickname: "",
      photo: "",
      profile: "",
      role: "",
      status: "",
      updateAt: 0,
    });
  };

  return (
    <Head>
      <Logo>
        <Title>술 만드는 사람들</Title>
      </Logo>
      <Nav>
        <Menu>
          <Item isactive={pathname === "/offline" ? "active" : ""}>
            <Link to="/offline">현실공간</Link>
          </Item>
          <Item isactive={pathname === "/information" ? "active" : ""}>
            <Link to="/information">정보</Link>
          </Item>
          <Item isactive={pathname === "/" ? "active" : ""}>
            <Link to="/">가양주</Link>
          </Item>
          <Item isactive={pathname === "/mypage" ? "active" : ""}>
            {isLogin ? <Link to="/mypage">내정보</Link> : <p>내정보</p>}
          </Item>
        </Menu>
        <User>
          {isLogin ? (
            <Button onClick={logout}>LOGOUT</Button>
          ) : (
            <Button onClick={login}>LOGIN</Button>
          )}
        </User>
      </Nav>
    </Head>
  );
}
