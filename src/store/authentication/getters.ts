import { GetterTree } from "vuex";
import { RootState } from "../root/state";
import { AuthenticationState } from "./state";


export const getters: GetterTree<AuthenticationState, RootState> = {
  isLoggedIn(state, getters, rootState) {
    return rootState.user.currentUser !== null;
  }
} 