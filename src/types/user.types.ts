export interface IGetUserResponse {
  username: string;
}

export const gender = {
  남: 1, 
  여: 2
} as const;
export interface IUser{
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  nickname: string;
  gender: number;
}
