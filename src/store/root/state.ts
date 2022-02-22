/* Modules */
import { AuthenticationState, state as authState  } from "../authentication/state"

export interface RootState {
  count: number
  auth: AuthenticationState,  
}

export const state: RootState = {
  count: 0,
  auth: authState,
}