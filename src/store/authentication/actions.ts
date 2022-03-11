import { ActionTree } from "vuex";
import { RootState } from "../root/state";
import { AuthenticationState } from "./state";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import { UserCredentials } from "./types";
import { FirebaseError } from "firebase/app";
import { getAuthErrorMessage } from "@/utils/errorHandlers";

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
      /* TODO: maybe extract message in components scope. */
      const message = getAuthErrorMessage(error as FirebaseError);
      throw new Error(message);
    }
  },

  async signInWithEmail({ commit }, payload: UserCredentials) {
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, payload.email, payload.password);
      const user = userCredential.user;
      commit('user/setUser', user, { root: true });
    } catch (error) {
      const message = getAuthErrorMessage(error as FirebaseError);
      throw new Error(message);
    }
  },

  async authenticateWithGoogle({ commit }) {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
  
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      commit('user/setUser', user, { root: true });
    } catch(error) {
      console.error(error);
      const message = getAuthErrorMessage(error as FirebaseError);
      throw new Error(message);
    }
  },

  async authenticateWithFacebook({ commit }) {
    const auth = getAuth();
    const provider = new FacebookAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      commit('user/setUser', user, { root: true });
    } catch(error) {
      console.error(error);
      const message = getAuthErrorMessage(error as FirebaseError);
      throw new Error(message);
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