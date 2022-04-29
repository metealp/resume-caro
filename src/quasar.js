import Vue from "vue";

import "./styles/quasar.scss";
import iconSet from "quasar/icon-set/material-icons-round.js";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import { Quasar } from "quasar";

Vue.use(Quasar, {
  config: {},
  plugins: {},
  iconSet: iconSet
});
