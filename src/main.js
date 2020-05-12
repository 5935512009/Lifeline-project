import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyA6HB37LMT51m0taR4UcCdxTZEU63cRYTo",
  authDomain: "vue-calendar-b86d1.firebaseapp.com",
  databaseURL: "https://vue-calendar-b86d1.firebaseio.com",
  projectId: "vue-calendar-b86d1",
  storageBucket: "vue-calendar-b86d1.appspot.com",
  messagingSenderId: "358554522376",
  appId: "1:358554522376:web:fe6d341ecdeccb5c94d2bd"

});


export const db = firebase.firestore();
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
