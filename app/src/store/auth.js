export default {
  state: () => ({
    token: "",
    username: "",
  }),
  mutations: {
    "auth-reload": function (state) {
        state.token = localStorage.getItem('token');
        state.username = localStorage.getItem('username');
      },
    "auth-token-update": function (state, token) {
      state.token = token;
      localStorage.setItem('token', token)
    },
    "auth-username-update": function (state, username) {
      state.username = username;
      localStorage.setItem('username', username);
    },
  },
};
