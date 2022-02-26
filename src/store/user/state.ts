import { IUser } from "./types";

export interface UserState {
  currentUser: IUser | null;
}

export const state: UserState = {
  currentUser: null
}