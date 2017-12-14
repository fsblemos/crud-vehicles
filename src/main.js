import 'font-awesome/css/font-awesome.min.css';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

const requireFile = requireContext => () => {
  requireContext.keys().forEach((fileName) => {
    let baseComponentConfig = requireContext(fileName);

    baseComponentConfig = baseComponentConfig.default || baseComponentConfig;

    const baseComponentName = baseComponentConfig.name || fileName.replace(/^.+\//, '').replace(/\.\w+$/, '');

    Vue.component(baseComponentName, baseComponentConfig);
  });
};

requireFile(require.context('./components', true, /\.vue$/))();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
