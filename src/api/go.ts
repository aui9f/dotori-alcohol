/**
 *공공데이타
 */

import { json } from "react-router-dom";
const URL = `https://api.odcloud.kr/api`;
const KEY_ENCODING = `cG%2FFXOhStOmIt%2BJlAK7EbmxAODhmTmLxIpuVEKo8%2BAcV3Fk7z7Ggj%2FVcGJ3KOvMn8fgJeE8MtmeuloyKIrkMKw%3D%3D`;
//  api.odcloud.kr / api;
// http://infuser.odcloud.kr/oas/docs?namespace=15048756/v1

export async function fetchBrewery(page: number) {
  return await (
    await fetch(
      `${URL}/15048756/v1/uddi:ebf9868d-7fbe-4b84-ab38-cc6bb6f0382f?page=${page}&perPage=${
        page + 9
      }&returnType=json&serviceKey=${KEY_ENCODING}`
    )
  ).json();
}
