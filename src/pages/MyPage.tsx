import { loginUserInfo, IUser, isUserLogin } from "@/api/atom";
import { auth } from "@/fbase";
import { useEffect } from "react";
import {
  Outlet,
  Route,
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px;
`;
const Contetns = styled.div`
  width: 600px;
  border: 1px solid #9e8066;
  margin: auto;
`;

const Header = styled.div`
  background-color: lightgray;
  height: 180px;
`;

const ImageProfile = styled.div`
  position: relative;
  text-align: right;
  height: 72px;
  padding: 16px;
`;
const Photo = styled.div`
  border-radius: 100%;
  position: absolute;
  top: -60px;
  left: 24px;
  width: 120px;
  height: 120px;
  background-color: gray;
  border: 4px solid #ffffff;
`;

const Button = styled.button`
  border: 1px solid #9e8066;
  background-color: #ffffff;
  color: #9e8066;
`;
const Text = styled.div``;

const Profile = styled.div`
  padding: 16px;
  > div {
    padding: 8px 0;
  }
  p {
    white-space: pre-wrap;
  }
`;
const Tab = styled.ul`
  display: flex;
  li {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
  li.active {
    border-bottom: 2px solid #9e8066;
    color: #9e8066;
    font-weight: bold;
  }
`;
const List = styled.ul``;

export default function MyPage() {
  const [loginUser, setLoginUser] = useRecoilState<IUser>(loginUserInfo);
  const isLogin = useRecoilValue(isUserLogin);

  const { pathname } = useLocation();
  const navi = useNavigate();
  const activeTab = pathname.split("/")[2] || "";

  const onClick = (url: string) => {
    navi(`/mypage${url}`);
  };

  const openModal = () => {
    navi("/mypage/settings");
  };

  useEffect(() => {
    if (!isLogin) {
      navi("/");
    }
  }, [isLogin]);

  return (
    <Wrapper>
      <Contetns>
        <Header></Header>
        <ImageProfile>
          <Photo />
          <Button onClick={openModal}>프로필 수정</Button>
        </ImageProfile>
        <Profile>
          <h3>{loginUser.nickname}</h3>
          <p>{loginUser.email}</p>
          <div>
            <p>{loginUser.profile || "-"}</p>
          </div>
          <div>{new Date(loginUser.createdAt).toLocaleDateString()}</div>
        </Profile>
        <Tab>
          <li
            className={activeTab === "" ? "active" : ""}
            onClick={() => onClick("")}
          >
            게시물
          </li>
          {/* <li>마음에들어요</li>
          <li>북마크</li> */}
          <li
            className={activeTab === "off-line" ? "active" : ""}
            onClick={() => onClick("/off-line")}
          >
            오프라인
          </li>
        </Tab>
        <Outlet />
      </Contetns>
    </Wrapper>
  );
}
