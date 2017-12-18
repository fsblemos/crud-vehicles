<template>
  <ca-section>
    <ca-level slot="header">
      <ca-field slot="right" class="is-grouped is-large">
        <ca-button class="control" @click.native="$router.go(-1)">Voltar</ca-button>
      </ca-field>
    </ca-level>
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          <p class="subtitle">Cadastro de veículo</p>
        </div>
      </div>
      <div class="card-content">
        <div class="columns">
          <div class="column is-9 is-offset-1">
            <ca-form ref="form" @submit="save(form)">
              <ca-input label="Placa"
                        v-model="form.placa"
                        case="upper"
                        masked
                        required
                        focus
                        :mask="{ mask: 'aaa-0000', prepare: str => str.toUpperCase() }">
              </ca-input>
              <ca-input label="Modelo" v-model="form.modelo" required></ca-input>
              <ca-input label="Marca" v-model="form.marca" required></ca-input>
              <ca-input label="Foto" v-model="form.imagem"></ca-input>
              <ca-select label="Combustível" v-model="form.combustivel" :options="fuels"></ca-select>
              <ca-money label="Valor" v-model="form.valor"></ca-money>
            </ca-form>
          </div>
        </div>
      </div>
    </div>
    <ca-level slot="footer">
      <ca-field slot="right" class="is-grouped is-large">
        <ca-button class="control is-primary" @click="submit">Salvar</ca-button>
      </ca-field>
    </ca-level>
  </ca-section>
</template>

<script>
export default {
  name: 'VehiclesEdit',
  data() {
    return {
      form: {},
      fuels: ['Gasolina', 'Alcool', 'Flex'],
    };
  },
  created() {
    this.clearForm();
  },
  methods: {
    save(vehicle) {
      this.$store.commit('addVehicle', vehicle);
      this.$toasted.success('Veículo incluído com sucesso!', { icon: 'car' });
      this.clearForm();
    },
    clearForm() {
      this.form = {
        placa: '', modelo: '', marca: '', imagem: '', combustivel: '', valor: 0,
      };
    },
    submit() {
      this.$refs.form.submit();
    },
  },
};
</script>
