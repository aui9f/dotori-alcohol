import { IBreweryData } from "./atom";
/**
 *공공데이타
 */

import { json } from "react-router-dom";
const URL = `https://api.odcloud.kr/api`;
const KEY_ENCODING = `cG%2FFXOhStOmIt%2BJlAK7EbmxAODhmTmLxIpuVEKo8%2BAcV3Fk7z7Ggj%2FVcGJ3KOvMn8fgJeE8MtmeuloyKIrkMKw%3D%3D`;
//  api.odcloud.kr / api;
// http://infuser.odcloud.kr/oas/docs?namespace=15048756/v1
// d21a949e-4032-4dee-9829-9c595ba8a46a_api

function changeKeyNames(obj: any, oldKeys: string[], newKeys: string[]): any {
  const newObj: any = {};
  for (let i = 0; i < oldKeys.length; i++) {
    newObj[newKeys[i]] = obj[oldKeys[i]];
  }
  return newObj;
}

export async function fetchBrewery(page: number) {
  const jsonData = await (
    await fetch(
      `${URL}/15048756/v1/uddi:d21a949e-4032-4dee-9829-9c595ba8a46a?page=${page}&perPage=10&returnType=json&serviceKey=${KEY_ENCODING}`
    )
  ).json();

  console.log("[[[[jsonData]]]]", jsonData);

  jsonData.data = jsonData.data.map((x: any) =>
    changeKeyNames(
      x,
      [
        "찾아가는양조장넘버",
        "양조장 이름",
        "양조장 주소",
        "양조장 연락처",
        "양조장 홈페이지",
        "양조장 상시방문가능여부",
        "양조장 예약방문가능여부",
      ],

      ["id", "name", "addr", "phone", "homepage", "visit", "reservation"]
    )
  );

  return jsonData;
}
