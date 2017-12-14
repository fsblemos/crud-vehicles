<template>
  <div id="app">
    <ca-navbar></ca-navbar>
    <ca-section>
      <ca-level>
        <ca-field slot="left" class="is-grouped">
          <ca-button class="control is-primary">Novo Carro</ca-button>
          <ca-button class="control is-danger">Excluir Carro</ca-button>
        </ca-field>
        <ca-input-search slot="right"></ca-input-search>
      </ca-level>
      <ca-table :rows="rows" :columns="columns">
        <template slot-scope="props">
          <ca-table-column v-if="props.column.index === 'imagem'" :row="props.row">
            <a v-if="props.row[props.column.index]":href="props.row[props.column.index]">Imagem</a>
          </ca-table-column>
          <ca-table-column v-else :row="props.row">
            {{ props.row[props.column.index] }}
          </ca-table-column>
        </template>
      </ca-table>
      <ca-pagination></ca-pagination>
    </ca-section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      columns: [
        { index: 'placa', title: 'Placa' },
        { index: 'modelo', title: 'Modelo' },
        { index: 'marca', title: 'Marca' },
        { index: 'imagem', title: 'Foto' },
        { index: 'combustivel', title: 'Combustível' },
        { index: 'valor', title: 'Valor' },
      ],
      rows: [{
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
    };
  },
};
</script>

<style lang="scss">
@import './assets/style.scss';

html,
body {
  color: #395A7A;
  font-size: 13px;
  line-height: 20px;
  margin: 0;
  background-color: #F1F4F9;
}
</style>
