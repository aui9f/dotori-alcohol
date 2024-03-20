import {
  getIsLoading,
  IBrewery,
  IBreweryData,
  visitingBrewery,
  visitingBreweryMax,
  visitingBreweryPage,
} from "@/api/atom";
import { fetchBrewery } from "@/api/go";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Wrapper = styled.div`
  > ul {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 4px;
    li {
      padding: 8px;
    }
  }
  width: 100%;
  max-width: 1240px;
`;

const Image = styled.div<{ name: string; height: string }>`
  width: 100%;

  border: 1px solid #eeeeee;
  background-color: rgba(0, 0, 0, 0.2);
  > div {
    padding-top: ${(props) => props.height};
    background-image: url(http://localhost:5173/public/offline/${(props) =>
      props.name}.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
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
    margin: 2px;
    font-size: 80%;
    background-color: #eeeeee;
    padding: 4px 8px;
    border-radius: 16px;
  }
`;

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
  padding: 8px;
  border-bottom: 1px solid gray;
  display: flex;
`;
const ModalBody = styled.div`
  padding: 8px;
`;
const ModalFooter = styled.div`
  padding: 8px;
  border-top: 1px solid gray;
`;

export default function Offline() {
  const [isLoading, setIsLoding] = useRecoilState(getIsLoading);
  const [pageNum, setPageNum] = useRecoilState(visitingBreweryPage);
  const [maxNum, setMaxNum] = useRecoilState(visitingBreweryMax);
  const [breweryList, setBreweryList] = useRecoilState(visitingBrewery);

  // setIsLoding(true);
  const { data } = useQuery<IBrewery>(
    ["brewery", pageNum],
    () => fetchBrewery(pageNum),
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      // enabled: pageNum !== Math.trunc(maxNum / 10), //조건
      onSuccess: (data) => {
        setTimeout(function () {
          document.body.style.overflow = "unset";
          setIsLoding(false);
        }, 1500);

        setMaxNum(data.matchCount);
        setBreweryList(() => [
          ...breweryList,
          ...data.data.map((x) => {
            return {
              id: x.id,
              name: x.name,
              addr: x.addr,
              phone: x.phone,
              homepage: x.homepage,
              visit: x.visit,
              reservation: x.reservation,
            };
          }),
          //     return [];
          // return {
          //   id: x["찾아가는양조장넘버"],
          //   name: x["양조장 이름"],
          //   addr: x["양조장 주소"],
          //   phone: x["양조장 연락처"],
          //   homepage: x["양조장 홈페이지"],
          //   visit: x["양조장 상시방문가능여부"],
          //   reservation: x["양조장 예약방문가능여부"],
          // };
          //   }),
        ]);
      },
    }
  );
  console.log("breweryList", breweryList);
  const scrollToBottom = (): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      if (!isLoading && pageNum !== Math.trunc(maxNum / 10)) {
        document.body.style.overflow = "hidden";
        setIsLoding(true);

        setPageNum(pageNum + 1);
      }
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
      <Moddal>
        <ModalContent>
          <ModalHeader>
            <div>이모티콘</div>
            <h3>제조이름</h3>
          </ModalHeader>
          <ModalBody>지도</ModalBody>
          <ModalFooter>확인버튼</ModalFooter>
        </ModalContent>
      </Moddal>
      <ul>
        {breweryList.map((brewery, index) => (
          <li key={index}>
            <Image height="60%" name={brewery.name}>
              <div></div>
            </Image>

            <Text>
              <h3>{brewery.name}</h3>
              <p>📍 {brewery.addr}</p>
              <p>📱 {brewery.phone}</p>
              <a href={brewery.homepage} target="_blank">
                🔗 홈페이지이동
              </a>
            </Text>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
