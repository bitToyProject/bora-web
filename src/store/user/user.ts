import { atom } from "recoil";
import { gender, IUser } from "types/user.types";

export const userState = atom<IUser>({
  key: "user",
  default: { username: '', firstName: "", lastName: "", nickname: '', phoneNumber: '', gender: gender.남},
});
