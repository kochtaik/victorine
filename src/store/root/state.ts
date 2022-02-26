/* Modules */
import { AuthenticationState, state as authState  } from "../authentication/state"
import { UserState, state as userState } from "../user/state"

export interface RootState {
  count: number
  auth: AuthenticationState,  
  user: UserState,
}

export const state: RootState = {
  count: 0,
  auth: authState,
  user: userState,
}