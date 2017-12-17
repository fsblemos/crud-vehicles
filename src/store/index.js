import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    vehicles: [{
      combustivel: 'Flex',
      imagem: null,
      marca: 'Volkswagem',
      modelo: 'Gol',
      placa: 'FFF-5498',
      valor: '20000',
    }, {
      combustivel: 'Gasolina',
      imagem: null,
      marca: 'Volkswagem',
      modelo: 'Fox',
      placa: 'FOX-4125',
      valor: '20000',
    }, {
      combustivel: 'Alcool',
      imagem: 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
      marca: 'Volkswagen',
      modelo: 'Fusca',
      placa: 'PAI-4121',
      valor: '20000',
    }],
  },
  mutations: {
    addVehicle(state, vehicle) {
      debugger;
      state.vehicles.push(vehicle);
    },
  },
});
