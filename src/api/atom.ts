import { atom, selector } from "recoil";
/**
 * uddi:ebf9868d-7fbe-4b84-ab38-cc6bb6f0382f_api
 * 제조사	string
대표자명	string
주소	string
주종	string
연락처	string
홈페이지	string
 */
/**
 * uddi:d21a949e-4032-4dee-9829-9c595ba8a46a_api
 * 양조장 이름	string
양조장 주소	string
양조장 연락처	string
양조장 홈페이지	string
양조장 상시방문가능여부	string
양조장 예약방문가능여부	string
조회수	integer
찾아가는양조장넘버	integer
 */
export interface IBreweryDataKo {
  "양조장 이름": string;
  "양조장 주소": string;
  "양조장 연락처": string;
  "양조장 홈페이지": string;
  "양조장 상시방문가능여부": string;
  "양조장 예약방문가능여부": string;
  찾아가는양조장넘버: string;
}

export interface IBreweryData {
  id: number;
  name: string;
  addr: string;
  phone: string;
  homepage: string;
  visit: string;
  reservation: string;
}

// export interface IBreweryData extends Pick<IBreweryDataKo, "양조장 이름"> {
//   id: IBreweryDataKo["찾아가는양조장넘버"];
//   name: IBreweryDataKo["양조장 이름"];
//   addr: IBreweryDataKo["양조장 주소"];
//   phone: IBreweryDataKo["양조장 연락처"];
//   homepage: IBreweryDataKo["양조장 홈페이지"];
//   visit: IBreweryDataKo["양조장 상시방문가능여부"];
//   reservation: IBreweryDataKo["양조장 예약방문가능여부"];
// }

export interface IBrewery {
  currentCount: number;
  data: IBreweryData[];
  matchCount: number;
  page: number;
  perPage: number;
  totalCount: number;
}

export const getIsLoading = atom<boolean>({
  key: "isLoading",
  default: false,
});

export const visitingBreweryPage = atom<number>({
  key: "visitingBreweryPage",
  default: 1,
});

export const visitingBreweryMax = atom<number>({
  key: "visitingBreweryMax",
  default: 1,
});

export const visitingBrewery = atom<IBreweryData[]>({
  key: "visitingBrewery",
  default: [],
});

export const goingSoolSelected = atom({
  key: "goingSoolSelected",
  default: 0,
});

export const goingSoolSelectedList = selector<IBreweryData>({
  key: "goingSoolSelectedList",
  get: ({ get }) => {
    const checked = get(goingSoolSelected);
    return get(visitingBrewery).filter((x) => x.id === checked)[0];
  },
});
