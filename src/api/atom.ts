import { atom } from "recoil";

export interface IBreweryData {
  대표자명: string;
  연락처: string;
  제조사: string;
  주소: string;
  주종: string;
  홈페이지: string;
  주종리스트?: string[];
}

export interface IBrewery {
  currentCount: number;
  data: IBreweryData[];
  matchCount: number;
  page: number;
  perPage: number;
  totalCount: number;
}

export const visitingBreweryPage = atom<number>({
  key: "paging",
  default: 0,
});
export const visitingBrewery = atom<IBreweryData[]>({
  key: "visitingBrewery",
  default: [],
});

//matchCount 총개수
