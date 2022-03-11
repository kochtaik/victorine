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
let googleBtn: ReturnType<typeof wrapper.get>;

beforeEach(() => {
  jest.clearAllMocks();

  (useRouter as jest.Mock).mockImplementationOnce(() => ({
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

  form = wrapper.get('[data-test="signInForm"]');
  googleBtn = wrapper.get('[data-test="google-btn"');
});

describe('signInWithEmail', () => {
  beforeEach(async () => {
    const emailField = wrapper.findComponent('#email');
    const passwordField = wrapper.findComponent('#password');

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

    (toast.error as jest.Mock) = jest.fn();

    await form.trigger('submit');
    expect(toast.error).toBeCalled();
  });

  it('redirects user to the home page after successful authentication', async () => {
    await form.trigger('submit');

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith('/');
  });
});

describe('authenticateWithGoogle', () => {
  it('calls "auth/authenticateWithGoogle" after successful authentication', async () => {
    await googleBtn.trigger('click');

    expect(store.dispatch).toHaveBeenCalledWith('auth/authenticateWithGoogle');
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('shows an error toast if error occurs', async () => {
    store.dispatch = jest.fn(() => {
      throw new Error();
    });
    (toast.error as jest.Mock) = jest.fn();

    await googleBtn.trigger('click');
    expect(toast.error).toHaveBeenCalled();
  });
});