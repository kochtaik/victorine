import { GetterTree } from "vuex";
import { RootState } from "../root/state";
import { AuthenticationState } from "./state";


export const getters: GetterTree<AuthenticationState, RootState> = {
  isLoggedInGetter(state) {
    return state.isLoggedIn;
  }
} 