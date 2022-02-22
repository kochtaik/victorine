import { Module, ModuleTree } from "vuex";
import { RootState } from "./state";
import auth from "../authentication/index";

import { state } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const modules: ModuleTree<RootState> = {
  auth,
};

const root: Module<RootState, RootState> = {
  state,
  getters,
  mutations,
  actions,
  modules,
};

export default root;