import Vue from "vue";
import App from "./App.vue";
import Default from "./layouts/Default.vue";
import VueFlashMessage from "vue-flash-message";
import VueEvents from 'vue-events';
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Loading from 'vue-loading-overlay';

Vue.use(VueFlashMessage);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.component("default-layout", Default);
Vue.use(VueEvents)

const firebaseConfig = {
  apiKey: "AIzaSyDxSBJCQmWId5vUViu07LvffhBRfSR2oSA",
  authDomain: "cleardate-29e10.firebaseapp.com",
  databaseURL: "https://cleardate-29e10.firebaseio.com",
  projectId: "cleardate-29e10",
  storageBucket: "cleardate-29e10.appspot.com",
  messagingSenderId: "117404937557",
  appId: "1:117404937557:web:10872cded97953ea0193dc",
  measurementId: "G-4VEZKDMFYE"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      Buefy,
      Loading,
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
