import Divider from "@/components/styled/Divider";
import Logo from "@/components/styled/Logo";
import IconGoogle from "@/assets/images/google.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loginUserInfo, getIsLoading, isUserLogin } from "@/api/atom";
import { userLogin } from "@/api/firestoreApi";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d9cfc5;
  display: flex;
  src: url("./fonts/나눔손글씨 엉겅퀴체.ttf") format("truetype");
  src: url("./fonts/나눔손글씨 할아버지의나눔.ttf") format("truetype");
    format("truetype");
`;

const Contents = styled.div`
  width: 375px;
  background-color: #ffffff;
  padding: 32px 48px;
  border-radius: 12px;
  margin: auto;
`;

const LoginHead = styled.div`
  text-align: center;
  margin: 24px 0 48px 0;
  h2 {
    margin-top: 12px;
    font-family: "나눔손글씨 할아버지의나눔";
    font-weight: normal;
  }
`;
const Form = styled.form`
  margin: 24px 0;
  input {
    margin-bottom: 8px;
  }
  > div {
  }
`;
const SNSBox = styled.div``;
const Err = styled.p`
  margin-bottom: 8px;
  color: #6c2814;
  font-size: 80%;
  font-style: italic;
`;
const Input = styled.input``;

const Button = styled.button`
  background-color: #9e8066;
  color: #ffffff;
  border: 1px solid #9e8066;
  width: 100%;
`;

const GoogleButton = styled.div`
  cursor: pointer;
  background-image: url(${IconGoogle});
  background-position-x: 8px;
  background-size: 18px;
  height: 32px;
  background-repeat: no-repeat;
  background-position-y: center;
  padding: 8px 8px 8px 36px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(217, 209, 197, 0.4);
  p {
    font-family: "나눔손글씨 엉겅퀴체";
    font-weight: normal;
  }
`;

const PageMovieBtn = styled.div`
  cursor: pointer;
  margin-top: 28px;
  p {
    font-family: "나눔손글씨 엉겅퀴체";
    font-weight: normal;
    text-align: right;
  }
`;

interface IForm {
  email: string;
  pw: string;
  extraError?: string;
}
export default function Login() {
  const setIsLoding = useSetRecoilState(getIsLoading);
  const isUser = useRecoilValue(isUserLogin);
  const navi = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();

  const onClick = () => {
    navi("/join");
  };

  const onSubmit = async ({ email, pw }: IForm) => {
    setIsLoding(true);

    const { status } = await userLogin({ email, pw });
    if (status === 200) {
      navi("/");
    } else {
      setError("pw", { message: "아이디, 비밀번호를 확인해주세요." });
    }
    setIsLoding(false);
  };

  useEffect(() => {
    if (isUser) {
      navi("/");
    }
  }, []);

  return (
    <Wrapper>
      <Contents>
        <LoginHead>
          <Logo width={"48px"} height={"48px"} />
          <h2>도토리 술 이야기</h2>
        </LoginHead>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type="text"
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "이메일을 입력해주세요.",
                },
              })}
              placeholder="Email"
            />
            {errors?.email?.message ? <Err>{errors.email.message}</Err> : null}
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              {...register("pw", {
                required: "비밀번호를 입력해주세요.",
              })}
            />

            {errors?.pw?.message ? <Err>{errors.pw.message}</Err> : null}
          </div>
          {errors?.extraError?.message ? (
            <Err>{errors.extraError.message}</Err>
          ) : null}

          <Button type="submit">LOGIN</Button>
        </Form>
        <Divider label={"S N S"} />
        <SNSBox>
          <GoogleButton>
            <p>구글 로그인</p>
          </GoogleButton>
        </SNSBox>

        <PageMovieBtn onClick={onClick}>
          <p>회원가입하기</p>
        </PageMovieBtn>
      </Contents>
    </Wrapper>
  );
}
