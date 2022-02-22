import { ActionTree } from "vuex"
import { RootState } from "../root/state";
import { AuthenticationState } from "./state"

export const actions: ActionTree<AuthenticationState, RootState> = {
  getSomething(ctx, payload) {
    return new Promise((resolve, reject) => setTimeout(() => {
      console.log('Async action has occurred!');
      resolve('Wow');
    }, 1000));  
  }
}