import { auth } from "../fbase";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div``;
const Lists = styled.ul`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 4px;
`;
const Li = styled.li`
  padding: 8px;
`;
const Item = styled.div`
  border: 1px solid #eeeeee;
`;
const Image = styled.div<{ height: string }>`
  width: 100%;
  padding-top: ${(props) => props.height};
  background-color: rgba(222, 222, 222, 0.2);
  margin-bottom: 8px;
  img {
  }
`;
const Text = styled.div`
  h4 {
  }
  p {
    margin-top: 4px;
    font-size: 80%;
  }
`;
const User = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  img {
    width: 28px;
    height: 28px;
    background-color: #eeeeee;
    border-radius: 100%;
    margin-right: 4px;
  }
`;
const Time = styled.p`
  margin: 8px 0;
  padding: 8px 0;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
`;
const Buttons = styled.div`
  padding: 8px;
  display: flex;
`;
const Button = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 80%;
`;
const Icon = styled.div`
  width: 16px;
  height: 16px;
  background-color: #aaaaaa;
  border-radius: 100%;
  margin-right: 4px;
`;
const Add = styled.div`
  width: 48px;
  height: 48px;
  background-color: red;
  position: fixed;
  bottom: 16px;
  right: 16px;
  border-radius: 100%;
`;
export default function HomeBrew() {
  console.log("[[USER]]", auth.currentUser);
  const navi = useNavigate();
  const onClick = () => {
    console.log("auth.currentUser", auth.currentUser);
    if (auth.currentUser === null) {
      if (confirm("로그인 회원만 작성할수 있습니다. 로그인하시겠습니까?")) {
        navi("/login");
      }
    }
  };
  return (
    <Wrapper>
      <Lists>
        <Li>
          <Item>
            <Image height="100%">
              <img src="" alt="" />
            </Image>

            <User>
              <img src="" alt="" />
              <span>Nickname</span>
            </User>

            <Text>
              <h4>호박 막걸리 만들기</h4>
              <p>
                찹쌀을 깨끗이 씻어 6시간 불렸다가 건져서 물기를 1시간 정도
                빼어고두밥을 짓는다.
              </p>
            </Text>

            <Time>
              <p>오후 9:20 2023년 12월 8일</p>
            </Time>

            <Buttons>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
            </Buttons>
          </Item>
        </Li>

        <Li>
          <Item>
            <Image height="100%">
              <img src="" alt="" />
            </Image>

            <User>
              <img src="" alt="" />
              <span>Nickname</span>
            </User>

            <Text>
              <h4>호박 막걸리 만들기</h4>
              <p>
                찹쌀을 깨끗이 씻어 6시간 불렸다가 건져서 물기를 1시간 정도 빼어
                고두밥을 짓는다.
              </p>
            </Text>

            <Time>
              <p>오후 9:20 2023년 12월 8일</p>
            </Time>

            <Buttons>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
            </Buttons>
          </Item>
        </Li>

        <Li>
          <Item>
            <Image height="100%">
              <img src="" alt="" />
            </Image>

            <User>
              <img src="" alt="" />
              <span>Nickname</span>
            </User>

            <Text>
              <h4>호박 막걸리 만들기</h4>
              <p>
                찹쌀을 깨끗이 씻어 6시간 불렸다가 건져서 물기를 1시간 정도 빼어
                고두밥을 짓는다.
              </p>
            </Text>

            <Time>
              <p>오후 9:20 2023년 12월 8일</p>
            </Time>

            <Buttons>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
            </Buttons>
          </Item>
        </Li>

        <Li>
          <Item>
            <Image height="100%">
              <img src="" alt="" />
            </Image>

            <User>
              <img src="" alt="" />
              <span>Nickname</span>
            </User>

            <Text>
              <h4>호박 막걸리 만들기</h4>
              <p>
                찹쌀을 깨끗이 씻어 6시간 불렸다가 건져서 물기를 1시간 정도 빼어
                고두밥을 짓는다.
              </p>
            </Text>

            <Time>
              <p>오후 9:20 2023년 12월 8일</p>
            </Time>

            <Buttons>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
            </Buttons>
          </Item>
        </Li>

        <Li>
          <Item>
            <Image height="100%">
              <img src="" alt="" />
            </Image>

            <User>
              <img src="" alt="" />
              <span>Nickname</span>
            </User>

            <Text>
              <h4>호박 막걸리 만들기</h4>
              <p>
                찹쌀을 깨끗이 씻어 6시간 불렸다가 건져서 물기를 1시간 정도 빼어
                고두밥을 짓는다.
              </p>
            </Text>

            <Time>
              <p>오후 9:20 2023년 12월 8일</p>
            </Time>

            <Buttons>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
              <Button>
                <Icon></Icon>
                <span>000</span>
              </Button>
            </Buttons>
          </Item>
        </Li>
      </Lists>
      <Add onClick={onClick} />
    </Wrapper>
  );
}
