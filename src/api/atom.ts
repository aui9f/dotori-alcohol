import { atom, selector } from "recoil";

export interface IBreweryData {
  id: number;
  name: string;
  addr: string;
  phone: string;
  homepage: string;
  visit: string;
  reservation: string;
}

export interface IBrewery {
  currentCount: number;
  data: IBreweryData[];
  matchCount: number;
  page: number;
  perPage: number;
  totalCount: number;
}

// const setIsLoding = useSetRecoilState(getIsLoading)
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

export interface IUser {
  uid?: string;
  createdAt: number;
  email: string;
  nickname?: string;
  photo: string;
  profile: string;
  role: string;
  status: string;
  updateAt: number;
}

export const loginUserInfo = atom<IUser>({
  key: "loginUserInfo",
  default: {
    uid: "",
    createdAt: 0,
    email: "",
    nickname: "",
    photo: "",
    profile: "",
    role: "",
    status: "",
    updateAt: 0,
  },
});

export const isUserLogin = selector({
  key: "isUserLogin",
  get: ({ get }) => {
    const user = get(loginUserInfo);
    return user?.uid !== "";
  },
});
