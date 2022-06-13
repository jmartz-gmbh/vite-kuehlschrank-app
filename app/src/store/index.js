import {createStore} from "vuex";
import nav from "./nav";
import url from "./url";
import auth from "./auth";

const store = createStore({
    modules: {
      url: url,
      auth: auth,
      nav: nav,
    },
  });

export default store;
