import SignIn from "@/components/auth/SignIn.vue";
import { mount } from "@vue/test-utils";
import { key } from "@/store";
import * as toast from "@/plugins/customToasts";

const authParams = {
  email: "admin123@test.com",
  password: 'admin123',
};

jest.mock('vue-router', () => ({
  useRouter: jest.fn(() => ({
    push: () => { }
  }))
}));

let wrapper: ReturnType<typeof mount>;
let store: {
  commit: jest.Mock<any, any>;
  dispatch: jest.Mock<any, any>;
};

beforeEach(() => {
  store = {
    commit: jest.fn(),
    dispatch: jest.fn(),
  };

  wrapper = mount(SignIn, {
    global: {
      provide: {
        [key as symbol]: store,
      },
      stubs: ['router-link', 'BaseInput'],
    },
  });
});


it('sets a user to Vuex after a successful authentication', async () => {
  const emailField = wrapper.findComponent('#email');
  const passwordField = wrapper.findComponent('#password');
  const form = wrapper.get('[data-test="signInForm"]');

  await emailField.setValue(authParams.email);
  await passwordField.setValue(authParams.password);
  await form.trigger('submit');

  expect(store.dispatch).toHaveBeenCalled();
});

it('shows a toast when error occurs', async () => {
  store.dispatch = jest.fn(() => {
    throw new Error;
  });

  //@ts-ignore
  toast.error = jest.fn();

  const emailField = wrapper.findComponent('#email');
  const passwordField = wrapper.findComponent('#password');
  const form = wrapper.get('[data-test="signInForm"]');

  await emailField.setValue(authParams.email);
  await passwordField.setValue(authParams.password);
  await form.trigger('submit');

  expect(toast.error).toBeCalled();
});
