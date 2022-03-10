import SignIn from "@/components/auth/SignIn.vue";
import { mount } from "@vue/test-utils";
import { key } from "@/store";
import * as toast from "@/plugins/customToasts";
import { useRouter } from "vue-router";

const authParams = {
  email: "admin123@test.com",
  password: 'admin123',
};
const push = jest.fn();

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
let form: ReturnType<typeof wrapper.get>;

beforeEach(async () => {
  jest.clearAllMocks();
  //@ts-ignore
  useRouter.mockImplementationOnce(() => ({
    push
  }));

  store = {
    commit: jest.fn(),
    dispatch: jest.fn(),
  };

  wrapper = mount(SignIn, {
    global: {
      provide: {
        [key as symbol]: store,
      },
      stubs: ['router-link', 'router-view', 'BaseInput', 'BaseButton'],
    },
  });

  const emailField = wrapper.findComponent('#email');
  const passwordField = wrapper.findComponent('#password');
  form = wrapper.get('[data-test="signInForm"]');

  await emailField.setValue(authParams.email);
  await passwordField.setValue(authParams.password);
});

it('sets a user to Vuex after a successful authentication', async () => {
  await form.trigger('submit');

  expect(store.dispatch).toHaveBeenCalled();
});

it('shows a toast when error occurs', async () => {
  store.dispatch = jest.fn(() => {
    throw new Error;
  });
  //@ts-ignore
  toast.error = jest.fn();

  await form.trigger('submit');
  expect(toast.error).toBeCalled();
});

it('redirects user to the home page after successful authentication', async () => {
  await form.trigger('submit');

  expect(push).toHaveBeenCalledTimes(1);
  expect(push).toHaveBeenCalledWith('/');
});
