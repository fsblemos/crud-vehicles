import Vue from 'vue';
import Router from 'vue-router';

import Vehicles from '@/views/vehicles';
import VehiclesEdit from '@/views/vehicles/edit';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: { name: 'vehicles' },
  }, {
    path: '/veiculos',
    name: 'vehicles',
    component: Vehicles,
  }, {
    path: '/veiculos/inserir',
    name: 'vehicles/insert',
    component: VehiclesEdit,
  }],
});
