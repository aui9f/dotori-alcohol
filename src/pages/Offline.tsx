import {
  getIsLoading,
  goingSoolSelectedList,
  IBrewery,
  IBreweryData,
  visitingBrewery,
  visitingBreweryMax,
  visitingBreweryPage,
} from "@/api/atom";
import { fetchBrewery } from "@/api/go";
import Goingsool from "@/components/Goingsool";
import KakaoMap from "@/components/KakaoMap";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Outlet, useMatch } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

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
  const itemId = useMatch("/offline/:id");

  const [isLoading, setIsLoding] = useRecoilState(getIsLoading);
  const [pageNum, setPageNum] = useRecoilState(visitingBreweryPage);
  const [maxNum, setMaxNum] = useRecoilState(visitingBreweryMax);
  const modalData = useRecoilValue<IBreweryData>(goingSoolSelectedList);

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
              id: x.id,
              name: x.name,
              addr: x.addr,
              phone: x.phone,
              homepage: x.homepage,
              visit: x.visit,
              reservation: x.reservation,
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

  //Modal Data;

  useEffect(() => {
    window.addEventListener("scroll", scrollToBottom, true);
    return () => {
      window.removeEventListener("scroll", scrollToBottom, true);
    };
  }, [scrollToBottom]);

  return (
    <Wrapper>
      {itemId ? (
        <Moddal>
          <ModalContent>
            <ModalHeader>
              <div></div>
              <h3>{modalData.name}</h3>
            </ModalHeader>
            <ModalBody>{/* <KakaoMap /> */}</ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Moddal>
      ) : null}
      <Goingsool breweryList={breweryList} />
    </Wrapper>
  );
}
