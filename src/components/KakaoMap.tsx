import { useEffect, useRef } from "react";
import styled from "styled-components";

const Map = styled.div`
  width: 400px;
  height: 300px;
`;

const { kakao }: any = window;

export default function KakaoMap() {
  const container = useRef(null);
  const options = {
    center: new kakao.maps.LatLng(37.56637787425258, 126.97827585270615),
    level: 5,
  };

  useEffect(() => {
    const map = new kakao.maps.Map(container.current, options);
    const location = [
      [37.56637787425258, 126.97827585270615],
      [37.56606939560325, 126.9826002893739],
      [37.56581495896049, 126.9752617019476],
    ];
    // location.map((e) => {
    //   const markerPosition = new kakao.maps.LatLng(e[0], e[1]);
    //   new kakao.maps.Marker({ map, position: markerPosition });
    // });

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch("카카오", placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }
  }, []);

  return <Map id={"map"} ref={container}></Map>;
}
