import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(222, 222, 222, 0.2);
  padding: 12px;
`;

const User = styled.div`
  display: flex;
  img {
    width: 48px;
    height: 48px;
  }
  > div {
    padding: 8px;
    display: flex;
  }
`;

const Text = styled.div`
  padding: 12px 0;
`;

const Images = styled.div``;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  > div {
    display: flex;
    padding: 0 8px;
    p {
      margin-left: 4px;
    }
  }
`;

const Icon = styled.div<{ img: string }>`
  width: 16px;
  height: 16px;
  background-color: gray;
`;

interface IPosting {
  photo: string;
  nickname: string;
  createdAt: string;
  text: string;
  images: string[];
  like: number;
  comment: number;
  bookmark: number;
}
export default function Bookmark() {
  return (
    <Wrapper>
      <User>
        <img src="" alt="" />
        <div>
          <p>Nickname</p>
        </div>
        <div>
          <Icon></Icon>
          <p>YYYY-MM-DD MM:DD</p>
        </div>
      </User>
      <Text>
        오늘은 우리 같이 걸어요 이 거리를 밤에 들려오는 자장노래 어떤가요 오예
        몰랐던 그대와 단 둘이 손 잡고 알 수 없는 이 떨림과 둘이 걸어요 봄바람
        휘날리며 흩날리는 벚꽃 잎이 울려 퍼질 이 거리를 우우 둘이 걸어요 봄바람
        휘날리며 흩날리는 벚꽃 잎이 울려 퍼질 이 거리를 우우 둘이 걸어요
      </Text>
      <Images></Images>
      <Buttons>
        <div>
          <Icon />
          <p>좋아요</p>
        </div>
        <div>
          <Icon />
          <p>댓글</p>
        </div>
        <div>
          <Icon />
          <p>북마크</p>
        </div>
      </Buttons>
    </Wrapper>
  );
}
