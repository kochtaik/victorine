import { ActionTree } from "vuex";
import { RootState } from "../root/state";
import { AuthenticationState } from "./state";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { UserCredentials } from "./types";

export const actions: ActionTree<AuthenticationState, RootState> = {
  getSomething(ctx, payload) {
    return new Promise((resolve, reject) => setTimeout(() => {
      console.log('Async action has occurred!');
      resolve('Wow');
    }, 1000));
  },

  async signUpWithEmail({ commit }, payload: UserCredentials) {
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
      const user = userCredential.user;
      commit('user/setUser', user, { root: true });
    } catch (error) {
      console.error(error);
      // const { code, message } = error;
    }
  },

  async signInWithEmail({ commit }, payload: UserCredentials) {
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, payload.email, payload.password);
      const user = userCredential.user;
      commit('user/setUser', user, { root: true });
    } catch (error) {
      console.log(error);
    }
  },

  async signOut({ commit }) {
    const auth = getAuth();

    try {
      await signOut(auth);
      commit('user/setUser', null, { root: true });
    } catch (error) {
      console.error(error);
    }
  }
};