import { activateFirebase } from "@/firebase/initFirebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ActionTree } from "vuex";
import { RootState } from "./state";

export const actions: ActionTree<RootState, RootState> = {
  /**
   * Initializes Firebase services. Checks state of the user
   * and sets it in to the store.
   */
  initializeFirebase({ commit }, payload): Promise<void> {
    return new Promise((resolve, reject) => {
      activateFirebase();
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        commit('user/setUser', user, { root: true });
        resolve();
      }); 
    });
  },
}