import Vue from 'vue';
import Router from 'vue-router';

import Vehicles from '@/views/vehicles';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: { name: 'veiculos' },
  }, {
    path: '/veiculos',
    name: 'veiculos',
    component: Vehicles,
  }],
});
