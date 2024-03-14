import { IBrewery, IBreweryData, visitingBrewery } from "@/api/atom";
import { fetchBrewery } from "@/api/go";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

const Wrapper = styled.ul`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 4px;
`;
const List = styled.li`
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
  padding: 8px;
  h3 {
    font-weight: bold;
    font-size: 120%;
  }
  p{
    margin: 8px; 0;
  }
`;

const Tag = styled.div`
  padding: 0 8px;
  span {
    font-size: 80%;
    background-color: #eeeeee;
    padding: 4px 8px;
    border-radius: 16px;
  }
`;

// const Info = styled.div`
//   width: 80%;
//   margin: 16px auto 8px;
//   display: flex;
//   > div {
//     padding: 8px;
//     flex: 1;
//     text-align: center;
//     &:first-child {
//       border-right: 1px solid #eeeeee;
//     }
//     img {
//       margin-top: 8px;
//       width: 24px;
//       height: 24px;
//       background-color: red;
//     }
//   }
// `;

export default function Offline() {
  const [pageNum, setPageNum] = useState(1);
  const [breweryList, setBreweryList] =
    useRecoilState<IBreweryData[]>(visitingBrewery);

  const { data, isLoading } = useQuery<IBrewery>(
    ["brewery", pageNum],
    () => fetchBrewery(pageNum),
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      enabled: pageNum * 10 !== breweryList.length,
      onSuccess: (data) => {
        setTimeout(function () {
          document.body.style.overflow = "unset";
        }, 1000);

        setBreweryList(() => [
          ...breweryList,
          ...data.data.map((x) => {
            return {
              대표자명: x["대표자명"],
              연락처: x["연락처"],
              제조사: x["제조사"],
              주소: x["주소"],
              주종: x["주종"],
              홈페이지: x["홈페이지"],
              주종리스트: x["주종"].split(","),
            };
          }),
        ]);
      },
    }
  );

  const scrollToBottom = (): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      document.body.style.overflow = "hidden";
      setPageNum(pageNum + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollToBottom, true);
    return () => {
      window.removeEventListener("scroll", scrollToBottom, true);
    };
  }, [scrollToBottom]);

  return (
    <Wrapper>
      {breweryList.map((brewery, index) => (
        <List key={index}>
          <Item>
            <Image height="60%">
              <img src="" />
            </Image>
          </Item>
          <Text>
            <h3>{brewery["제조사"]}</h3>
            <p>📍 {brewery["주소"]}</p>
            <p>📱 {brewery["연락처"]}</p>
            <a href={brewery["홈페이지"]} target="_blank">
              🔗 홈페이지이동
            </a>
          </Text>
          <Tag>
            {brewery["주종리스트"]?.map((x, xIndex) => (
              <span key={xIndex}>#{x}</span>
            ))}
          </Tag>
          {/* <Info>
            <div>
              <p>상시방문</p>
              <img />
            </div>
            <div>
              <p>예약방문</p>
            </div>
          </Info> */}
        </List>
      ))}

      {/* <List>
        <Item>
          <Image height="60%">
            <img src="" />
          </Image>
          <Text>
            <h3>산머루농원</h3>
            <p>📍 경기 파주시 적성면 객현리 67-1</p>
            <p>📱 031-958-4558</p>
            <p>🔗 https://www.sanmeoru.com</p>
          </Text>
          <Tag>
            <span>#과실주</span>
          </Tag>

          <Info>
            <div>
              <p>상시방문</p>
              <img />
            </div>
            <div>
              <p>예약방문</p>
            </div>
          </Info>
        </Item>
      </List>
    */}
    </Wrapper>
  );
}
