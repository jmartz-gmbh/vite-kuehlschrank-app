import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import routes from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faEdit,
  faBars,
  faGear,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import plausible from "./plugins/plausible";

library.add(faEdit, faPlus, faBars, faGear, faTrash);

const plausibleOptions = {
  domain: "xn--khlschrank-9db.app",
  apiHost: "https://tracking.jmartz.gmbh",
  hashMode: false,
  trackLocalhost: false,
};

const app = createApp(App);

app.use(plausible, plausibleOptions);
app.component("fa", FontAwesomeIcon);
app.use(routes);
app.use(store);
app.mount("#app");
