import { mockUser, authParams } from "./__mocks__/store";
import SignIn from "@/components/auth/SignIn.vue";
import { mount } from "@vue/test-utils";
import { key } from "@/store";
import { ActionTree, createStore, Module, Store } from "vuex";
import * as toast from "@/plugins/customToasts";

jest.mock('vue-router', () => ({
  useRouter: jest.fn(() => ({
    push: () => { }
  }))
}));


let userModule: Module<any, unknown> = {
  namespaced: true,
  state: {
    currentUser: null,
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload;
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.currentUser !== null;
    },
    currentUser(state) {
      return state.currentUser;
    }
  }
};

let authActions: ActionTree<any, unknown> = {
  signInWithEmail({ commit }) {
    commit('user/setUser', mockUser, { root: true });
  }
};


let store = createStore({
  modules: {
    auth: {
      namespaced: true,
      actions: authActions,
    },
    user: userModule,
  }
});

let wrapper: ReturnType<typeof mount>

beforeEach(() => {
  wrapper = mount(SignIn, {
    global: {
      provide: {
        [key as symbol]: store,
      },
      stubs: ['router-link', 'BaseInput'],
    },
  });
});


test('sets a user to Vuex after a successful authentication', async () => {
  const emailField = wrapper.findComponent('#email');
  const passwordField = wrapper.findComponent('#password');
  const form = wrapper.get('[data-test="signInForm"]');

  await emailField.setValue(authParams.email);
  await passwordField.setValue(authParams.password);
  await form.trigger('submit');

  expect(store.getters['user/isLoggedIn']).toBe(true);
  expect(store.getters['user/currentUser']).toStrictEqual(mockUser);
});

test('shows a toast when error occurs', async () => {
  
  //@ts-ignore
  toast.error = jest.fn();
  
  store = createStore({
    modules: {
      auth: {
        namespaced: true,
        actions: {
          signInWithEmail({ commit }) {
            throw new Error();
          }
        }
      },
      user: userModule,
    }
  });

  const wrapper = mount(SignIn, {
    global: {
      provide: {
        [key as symbol]: store,
      },
      stubs: ['router-link', 'BaseInput'],
    },
  });

  const emailField = wrapper.findComponent('#email');
  const passwordField = wrapper.findComponent('#password');
  const form = wrapper.get('[data-test="signInForm"]');

  await emailField.setValue(authParams.email);
  await passwordField.setValue(authParams.password);
  await form.trigger('submit');

  expect(toast.error).toBeCalled();
});
