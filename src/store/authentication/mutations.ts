import { MutationTree } from "vuex"
import { AuthenticationState } from "./state"

export const mutations: MutationTree<AuthenticationState> = {
  toggleLoggedIn(state, payload) {
    state.isLoggedIn = payload || !state.isLoggedIn;
  }
}