<template>
  <ca-section>
    <ca-level>
      <ca-field slot="left" class="is-grouped is-large">
        <ca-button class="control is-primary" :to="{ name: 'vehicles/insert' }">
          Novo Carro
        </ca-button>
        <ca-button class="control is-danger">Excluir Carro</ca-button>
      </ca-field>
      <ca-input-search slot="right" class="is-large"></ca-input-search>
    </ca-level>
    <ca-table :rows="vehicles">
      <template slot-scope="props">
        <ca-table-column label="Placa" name="placa" :row="props.row"></ca-table-column>
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
    <ca-pagination></ca-pagination>
  </ca-section>
</template>

<script>
import numeral from '@/utils/numeral';

export default {
  name: 'Vehicles',
  computed: {
    vehicles() {
      return this.$store.state.vehicles;
    },
  },
  methods: {
    getFormattedValue(value) {
      return numeral(value).format('0,0.00');
    },
  },
};
</script>
