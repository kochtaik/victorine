import { createStore } from "vuex";

export const authParams = {
  email: "admin123@test.com",
  password: 'admin123',
};

export const mockUser = {
  accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmljdG9yaW5lLTEzOGI3IiwiYXVkIjoidmljdG9yaW5lLTEzOGI3IiwiYXV0aF90aW1lIjoxNjQ2NjQyNTkxLCJ1c2VyX2lkIjoiTEk5dEVqemRTMFRBT3pyWXZ6NjhSeWd4QXZXMiIsInN1YiI6IkxJOXRFanpkUzBUQU96cll2ejY4UnlneEF2VzIiLCJpYXQiOjE2NDY2NjEyMTYsImV4cCI6MTY0NjY2NDgxNiwiZW1haWwiOiJiZWpvdmFrNTM3QHRpbnlkZWYuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImJlam92YWs1MzdAdGlueWRlZi5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.KGoX3yK3bbMRGI9BDitMYvUr0aRAUVrsfjBWJxR8o3Q5ZTL5eZ8pjQ1fOuj37KTcmVa-UuNlPxekjbsSKmS5MVPYsPADRqCrUNJRUDEBOpo0VV8NSQ7q_oduz1jt8xdZE0we0VwNIz3f6XcaiaCyqRjnRqs_IPJuki0NHRlqN5THjvMbTGx7nDGjxVAlq5OnI0n7tqaPqB0m3VG8Bq0fMNJO3RsVFhhcBnHl16RptsLZnDCLsQ9YUe-OL-j8FHcUu6OqCh-pHvOLoM09K0Uuu-fHStUrcxtspg94BfMigcRY33QGhl_F4wYOcXElSr6_fKmyRP5VoJVBDwCaELJneQ",
  displayName: null,
  email: "admin123@test.com",
  phoneNumber: null,
  photoURL: null,
};

export const store = createStore({
  modules: {
    auth: {
      namespaced: true,
      actions: {
        signInWithEmail({ commit }) {
          commit('user/setUser', mockUser, { root: true });
        }
      },
    },
    user: {
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
    },
  }
});