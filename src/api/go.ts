/**
 *공공데이타
 */

import { json } from "react-router-dom";
const URL = `https://api.odcloud.kr/api`;
const KEY_ENCODING = `cG%2FFXOhStOmIt%2BJlAK7EbmxAODhmTmLxIpuVEKo8%2BAcV3Fk7z7Ggj%2FVcGJ3KOvMn8fgJeE8MtmeuloyKIrkMKw%3D%3D`;
//  api.odcloud.kr / api;
// http://infuser.odcloud.kr/oas/docs?namespace=15048756/v1

interface IBreweryData {
  대표자명: string;
  연락처: string;
  제조사: string;
  주소: string;
  주종: string;
  홈페이지: string;
}
export interface IBrewery {
  currentCount: number;
  data: IBreweryData[];
  matchCount: number;
  page: number;
  perPage: number;
  totalCount: number;
}

export async function fetchBrewery(page: number, perPage: number) {
  console.log(">>", page);
  return await (
    await fetch(
      `${URL}/15048756/v1/uddi:ebf9868d-7fbe-4b84-ab38-cc6bb6f0382f?page=${page}&perPage=${perPage}&returnType=json&serviceKey=${KEY_ENCODING}`
    )
  ).json();
}
