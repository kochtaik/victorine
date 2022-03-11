
import { preventForAuthenticated, preventForUnauthenticated } from "@/router/guards";
import { store } from "@/store";

jest.mock('@/store', () => {
  return {
    store: {
      getters: {
        'auth/isLoggedIn': true
      }
    }
  };
});

const from = { fullPath: "/" };
const next = jest.fn();
const to = {
  meta: {
    forNonAuthenticated: true,
  }
};

describe('preventForAuthenticated', () => {
  beforeEach(jest.resetAllMocks);

  it('doesn\'t prevent logged in users from entering pages for authenticated', () => {
    store.getters['auth/isLoggedIn'] = true;
    to.meta.forNonAuthenticated = false;

    //@ts-ignore
    preventForAuthenticated(to, from, next);
    expect(next).toBeCalledWith();
  });

  it('doesn\'t prevent not logged in users from entering pages for non-authenticated', () => {
    store.getters['auth/isLoggedIn'] = false;
    to.meta.forNonAuthenticated = true;

    //@ts-ignore;
    preventForAuthenticated(to, from, next);
    expect(next).toBeCalledWith();
  });

  it('redirects from pages only for non authenticated if user is logged in', () => {
    store.getters['auth/isLoggedIn'] = true;
    to.meta.forNonAuthenticated = true;

    //@ts-ignore
    preventForAuthenticated(to, from, next);
    expect(next).toHaveBeenCalledWith(from.fullPath);
  });
});

describe('preventForUnauthenticated', () => {
  beforeEach(jest.resetAllMocks);

  it('doesn\'t prevent authenticated user from entering pages only for authenticated', () => {
    store.getters['auth/isLoggedIn'] = true;
    to.meta.forNonAuthenticated = false;

    //@ts-ignore
    preventForUnauthenticated(to, from, next);
    expect(next).toBeCalledWith();
  });

  it('doesn\'t prevent unauthenticated user from entering pages for non authenticated', () => {
    store.getters['auth/isLoggedIn'] = false;
    to.meta.forNonAuthenticated = true;

    //@ts-ignore
    preventForUnauthenticated(to, from, next);
    expect(next).toBeCalledWith();
  });

  it(
    'redirects to "Sign in" page if user tries to access routes that only for authenticated',
    () => {
      store.getters['auth/isLoggedIn'] = false;
      to.meta.forNonAuthenticated = false;

      //@ts-ignore
      preventForUnauthenticated(to, from, next);
      expect(next).toBeCalledWith("/auth/signin");
    }
  );
});
