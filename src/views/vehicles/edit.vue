<template>
  <ca-section>
    <ca-level>
      <ca-field slot="right" class="is-grouped is-large">
        <ca-button class="control" @click.native="$router.go(-1)">Voltar</ca-button>
      </ca-field>
    </ca-level>
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          <span class="icon">
            <i class="fa fa-car"></i>
          </span>
          <p class="subtitle">Cadastro de veículo</p>
        </div>
      </div>
      <div class="card-content">
        <ca-field label="Placa" is-horizontal size="large">
          <ca-input v-model="form.placa" case="upper" maxlength="7"></ca-input>
        </ca-field>
        <ca-field label="Modelo" is-horizontal>
          <ca-input class="is-large" v-model="form.modelo"></ca-input>
        </ca-field>
        <ca-field label="Marca" is-horizontal>
          <ca-input class="is-large" v-model="form.marca"></ca-input>
        </ca-field>
        <ca-field label="Foto" is-horizontal>
          <ca-input class="is-large" v-model="form.imagem"></ca-input>
        </ca-field>
        <ca-field label="Combustível" is-horizontal>
          <ca-input class="is-large" v-model="form.combustivel"></ca-input>
        </ca-field>
        <ca-field label="Valor" is-horizontal>
          <ca-input class="is-large" v-model="form.valor" type="number"></ca-input>
        </ca-field>
      </div>
    </div>
    <ca-level :style="{ marginTop: '1.5rem' }">
      <ca-field slot="right" class="is-grouped is-large">
        <ca-button class="control is-primary" @click.native="$router.go(-1)">Salvar</ca-button>
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
        placa: null,
      },
    };
  },
};
</script>
