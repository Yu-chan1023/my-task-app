import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/css/styles.css'
import firebase from "firebase/app";

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2P945M0uggWWrfVFPJlIYIkl4RL9UF8w",
  authDomain: "vue-task-app-6265b.firebaseapp.com",
  projectId: "vue-task-app-6265b",
  storageBucket: "vue-task-app-6265b.appspot.com",
  messagingSenderId: "895490637303",
  appId: "1:895490637303:web:46d702489a7074c62982f2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
