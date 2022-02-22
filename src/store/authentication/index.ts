import { Module } from "vuex";
import { RootState } from "../root/state";
import { state, AuthenticationState } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

const auth: Module<AuthenticationState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default auth;
