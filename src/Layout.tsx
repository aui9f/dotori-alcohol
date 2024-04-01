import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getIsLoading, isUserLogin, IUser, loginUserInfo } from "./api/atom";

import { getUser, onAuth } from "./api/firestoreApi";
import Header from "./components/Header";
import { auth, onAuthStateChanged } from "./fbase";
const Contents = styled.div`
  margin-top: 96px;
`;
export default function Layout() {
  const [pageInit, setPageInit] = useState(false);
  const setIsLoding = useSetRecoilState(getIsLoading);
  const [loginUser, setLoginUser] = useRecoilState<IUser>(loginUserInfo);
  const isLogin = useRecoilValue(isUserLogin);

  const init = async () => {
    const { uid } = auth?.currentUser || "";

    if (uid) {
      const { status, message } = await getUser(uid);
      const params = {
        uid,
        ...message,
      };
      await setLoginUser(params);
    } else {
    }

    setIsLoding(false);
    setPageInit(true);
  };

  useEffect(() => {
    setIsLoding(true);
    onAuthStateChanged(auth, () => {
      init();
    });
  }, [auth?.currentUser]);
  return (
    <>
      <Header isLogin={isLogin} />
      <Contents>{pageInit ? <Outlet /> : null}</Contents>
    </>
  );
}
