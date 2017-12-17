<template>
  <ca-section>
    <ca-level>
      <ca-field slot="left" class="is-grouped is-large">
        <ca-button class="control is-primary" :to="{ name: 'vehicles/insert' }">
          Novo Carro
        </ca-button>
        <ca-button class="control is-danger" @click="removeSelectedRows()">Excluir Carro</ca-button>
        {{ search }}
      </ca-field>
      <ca-input-search slot="right" v-model="search" @search="searchVehicles"></ca-input-search>
    </ca-level>
    <ca-table :rows="listedVehicles" checkbox>
      <template slot-scope="props">
        <ca-table-column label="Placa" name="placa" :row="props.row">
          {{ getFormattedPlate(props.row.placa) }}
        </ca-table-column>
        <ca-table-column label="Modelo" name="modelo" :row="props.row"></ca-table-column>
        <ca-table-column label="Marca" name="marca" :row="props.row"></ca-table-column>
        <ca-table-column label="Imagem" name="imagem" :row="props.row">
          <a v-if="props.row.imagem" :href="props.row.imagem">Imagem</a>
        </ca-table-column>
        <ca-table-column label="Combustível" name="combustivel" :row="props.row"></ca-table-column>
        <ca-table-column label="Valor" name="valor" :row="props.row">
          {{ getFormattedValue(props.row.valor) }}
        </ca-table-column>
      </template>
    </ca-table>
  </ca-section>
</template>

<script>
import numeral from '@/utils/numeral';

export default {
  name: 'Vehicles',
  data() {
    return {
      search: null,
      listedVehicles: [],
    };
  },
  computed: {
    vehicles() {
      return this.$store.state.vehicles;
    },
  },
  created() {
    this.listedVehicles = this.vehicles;
  },
  methods: {
    searchVehicles() {
      const compare = field => field.toUpperCase().includes(this.search.toUpperCase());

      this.listedVehicles = this.search
        ? this.vehicles.filter(vehicle => compare(vehicle.combustivel) || compare(vehicle.marca))
        : this.vehicles;
    },
    getFormattedPlate(plate) {
      return plate.replace('-', '');
    },
    getFormattedValue(value) {
      return numeral(value).format('0,0.00');
    },
    removeSelectedRows() {
      const vehicles = this.vehicles.filter(vehicle => vehicle.selected);
      const plural = vehicles.length > 1 ? 's' : '';

      this.$store.commit('removeVehicles', vehicles);
      this.$toasted.success(`Veículo${plural} removido${plural} com sucesso!`, { icon: 'car' });
      this.searchVehicles();
    },
  },
};
</script>
