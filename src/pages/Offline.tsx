import {
  getIsLoading,
  IBrewery,
  IBreweryData,
  visitingBrewery,
  visitingBreweryMax,
  visitingBreweryPage,
} from "@/api/atom";
import { fetchBrewery } from "@/api/go";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Wrapper = styled.ul`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 4px;
  li {
    padding: 8px;
  }
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

export default function Offline() {
  const [isLoading, setIsLoding] = useRecoilState(getIsLoading);
  const [pageNum, setPageNum] = useRecoilState(visitingBreweryPage);
  const [maxNum, setMaxNum] = useRecoilState(visitingBreweryMax);
  const [breweryList, setBreweryList] =
    useRecoilState<IBreweryData[]>(visitingBrewery);

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
      {breweryList.map((brewery, index) => (
        <li key={index}>
          <Image height="60%" name={brewery["제조사"]}>
            <div></div>
          </Image>

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
        </li>
      ))}
    </Wrapper>
  );
}
