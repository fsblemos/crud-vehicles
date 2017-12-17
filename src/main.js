import 'font-awesome/css/font-awesome.min.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

require('./utils/global-components');

Vue.config.productionTip = false;

Vue.directive('focus', {
  inserted: (el, binding) => {
    if (binding.value) {
      el.focus();
    }
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
