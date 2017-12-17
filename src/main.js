import 'font-awesome/css/font-awesome.min.css';

import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import Toasted from 'vue-toasted';
import VueMask from 'v-mask';

require('./utils/global-components');

Vue.config.productionTip = false;

Vue.directive('focus', {
  inserted: (el, binding) => {
    if (binding.value) {
      el.focus();
    }
  },
});

Vue.use(VueMask);
Vue.use(Toasted, {
  duration: 2000,
  iconPack: 'fontawesome',
  position: 'top-center',
  theme: 'bubble',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
