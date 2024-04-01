import { loginUserInfo, IUser, getIsLoading } from "@/api/atom";
import { doc, db, updateDoc } from "../fbase";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import close from "../assets/images/close.png";
import { getUser, updateUser } from "@/api/firestoreApi";
import { useEffect } from "react";
const Wrapper = styled.div``;

const Moddal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
`;
const ModalContent = styled.div`
  width: 480px;
  background-color: white;
  margin: auto;
  border-radius: 8px;
`;
const ModalHeader = styled.div`
  height: 48px;
  padding: 8px;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;

  h3 {
    flex: 1;
  }
`;
const ModalBody = styled.div`
  padding: 8px;
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${close});
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
`;
const Input = styled.input`
  margin-bottom: 12px;
`;
const Textarea = styled.textarea``;
const Button = styled.button`
  background-color: #9e8066;
  border: 0;
  padding: 4px 24px;
  height: auto;
  color: #ffffff;
  border-radius: 40px;
`;

export default function ModalUserSettings() {
  const setIsLoding = useSetRecoilState(getIsLoading);
  const [loginUser, setLoginUser] = useRecoilState<IUser>(loginUserInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      nickname: loginUser.nickname,
      profile: loginUser.profile.replace("\\n", "\n"),
    },
  });

  const navi = useNavigate();

  const onClick = () => {
    navi("/mypage");
  };
  const onValid = async ({
    nickname,
    profile,
  }: {
    nickname: string;
    profile: string;
  }) => {
    setIsLoding(true);
    const uid = loginUser.uid || "";
    await updateUser(uid, nickname, profile);
    const { message } = await getUser(uid);
    await setLoginUser({ uid, ...message });
    setIsLoding(false);
  };

  return (
    <Wrapper>
      <Moddal>
        <ModalContent>
          <ModalHeader>
            <Icon onClick={onClick} />
            <h3>프로필수정</h3>
            <Button onClick={handleSubmit(onValid)}>저장</Button>
          </ModalHeader>
          <ModalBody>
            <Input
              {...register("nickname", {
                required: "필수입력사항",
                minLength: {
                  value: 2,
                  message: "2글자이상 입력",
                },
              })}
              placeholder={loginUser.nickname}
            />
            <Textarea
              {...register("profile")}
              placeholder={loginUser.profile || "자기소개"}
            />
          </ModalBody>
        </ModalContent>
      </Moddal>
    </Wrapper>
  );
}
