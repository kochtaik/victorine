/* eslint-disable */
import { FirebaseError } from "firebase/app";

/**
 * Authentication API errors of Firebase.
 * See https://stackoverflow.com/questions/39152004/list-of-all-auth-errors-for-firebase-web-api
 */
export enum authErrorMessages {
  'auth/wrong-password' = "You entered a wrong password",
  'auth/user-not-found' = "The user does not exist. Check the email address you entered.",
  'auth/email-already-in-use' = "The provided email is already in use by an existing user. Each user must have a unique email.",
  'auth/invalid-password' = 'The provided value for the password user property is invalid. It must be a string with at least six characters.',
  'auth/weak-password' = "The password must be 6 characters long or more.",
  'auth/account-exists-with-different-credential' = 'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
  default = 'Something went wrong. Please, try later.'
}

/**
 * Get message to display basing on error code.
 *  
 * @returns the message to display in case of the Firebase error.
 */
export function getAuthErrorMessage(error: FirebaseError): authErrorMessages {
  const message = authErrorMessages[error.code as keyof typeof authErrorMessages];
  return message || authErrorMessages.default;
}