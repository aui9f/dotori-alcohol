import { loginUserInfo } from "@/api/atom";
import { useSetRecoilState } from "recoil";
import { async } from "@firebase/util";
import { IUser } from "./atom";
import {
  auth,
  db,
  collection,
  query,
  where,
  getDoc,
  getDocs,
  signOut,
  doc,
  setDoc,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateDoc,
} from "../fbase";

export const getUser = async (uid: string) => {
  try {
    const docRef = doc(db, "user", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        status: 200,
        message: { ...docSnap.data() },
      };
    } else {
      console.log("No such document!");
    }
  } catch (error) {}
};

// 회원정보 수정
export async function updateUser(
  uid: string,
  nickname: string,
  profile: string
) {
  const washingtonRef = doc(db, "user", uid);
  await updateDoc(washingtonRef, {
    nickname,
    profile,
  });
}

//User Join 회원가입
export async function userJoin(uid: string, params: IUser) {
  try {
    await setDoc(doc(db, "user", uid), params);
    return { status: 200 };
  } catch (error) {
    console.log("userJoin", error);
    return { status: 999 };
  }
}

//User Login 로그인
export async function userLogin({ email, pw }: { email: string; pw: string }) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, pw);
    return {
      status: 200,
      message: {
        uid: userCredential.user.uid,
      },
    };
  } catch (error) {
    return {
      status: 999,
      message: error,
    };
  }
}

//User Logout 로그아웃
export async function userLogout() {
  try {
    await signOut(auth);
    return { status: 200 };
  } catch (error) {
    console.log("userLogout", error);
  }
}
