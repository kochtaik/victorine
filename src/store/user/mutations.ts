import { User } from "firebase/auth";
import { MutationTree } from "vuex";
import { UserState } from "./state";


export const mutations: MutationTree<UserState> = {
  setUser(state, payload: User) {
    console.log(payload)
    state.currentUser = payload;
    console.log(state.currentUser);
  }
}