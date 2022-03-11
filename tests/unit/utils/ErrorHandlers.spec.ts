import { getAuthErrorMessage, authErrorMessages } from '@/utils/errorHandlers';
import { FirebaseError } from "firebase/app";

describe('getAuthErrorMessage', () => {
  const error = { code: "" };

  it('returns a message corresponding to the error code', () => {
    error.code = "auth/wrong-password";

    expect(getAuthErrorMessage(error as FirebaseError)).toBe(authErrorMessages['auth/wrong-password']);
  });

  it('returns default message if error code isn\'t found', () => {
    error.code = "some-nonexistent-code";

    expect(getAuthErrorMessage(error as FirebaseError)).toBe(authErrorMessages.default);
  });
});