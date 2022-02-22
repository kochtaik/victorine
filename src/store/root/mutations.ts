import { MutationTree } from "vuex";
import { RootState } from "./state";

export const mutations: MutationTree<RootState> = {
  increment(state, value) {
    state.count += 1;
  }
}