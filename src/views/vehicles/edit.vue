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
          <div class="column is-8 is-offset-2">
            <ca-form @submit="save(form)">
              <ca-field label="Placa" is-horizontal>
                <ca-input v-model="form.placa" case="upper" maxlength="7" size="large"></ca-input>
              </ca-field>
              <ca-field label="Modelo" is-horizontal>
                <ca-input v-model="form.modelo" size="large"></ca-input>
              </ca-field>
              <ca-field label="Marca" is-horizontal>
                <ca-input v-model="form.marca" size="large"></ca-input>
              </ca-field>
              <ca-field label="Foto" is-horizontal>
                <ca-input v-model="form.imagem" size="large"></ca-input>
              </ca-field>
              <ca-field label="Combustível" is-horizontal>
                <ca-input v-model="form.combustivel" size="large"></ca-input>
              </ca-field>
              <ca-field label="Valor" is-horizontal>
                <ca-input v-model="form.valor" size="large" type="number"></ca-input>
              </ca-field>
            </ca-form>
          </div>
        </div>
      </div>
    </div>
    <ca-level slot="footer">
      <ca-field slot="right" class="is-grouped is-large">
        <ca-button class="control is-primary" @click="save(form)">Salvar</ca-button>
      </ca-field>
    </ca-level>
  </ca-section>
</template>

<script>
export default {
  name: 'VehiclesEdit',
  data() {
    return {
      form: {
        placa: null, modelo: null, marca: null, imagem: null, combustivel: null, valor: null,
      },
    };
  },
  methods: {
    save(vehicle) {
      this.$store.commit('addVehicle', vehicle);
    },
  },
};
</script>
