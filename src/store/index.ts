import { createStore, ModuleTree, Store, useStore as useBaseStore} from "vuex";
import { InjectionKey } from "vue";
import root from "./root/index";
import { RootState } from "./root/state";


export const key: InjectionKey<Store<RootState>> = Symbol();
export const store = createStore<RootState>(root);

export function useStore() {
  return useBaseStore(key);
}