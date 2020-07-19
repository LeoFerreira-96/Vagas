<template>
  <div>
    <!-- Logo com Titulo -->
    <div class="topo">
      <img
        class="logo"
        slot="cover"
        alt="The Universe"
        src="../../assets/logo.png"
      />
      <p class="title">THE UNIVERSE</p>
    </div>
    <!-- Conteudo -->
    <div class="containerDetail">
      <a-form
        :form="form"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="onSubmit"
      >
        <a-form-item label="Titulo">
          <a-input
            v-decorator="[
              'name'
            ]"
          />
        </a-form-item>
        <a-form-item label="Resumo">
          <a-textarea
            v-decorator="[
              'resume'
            ]"
            placeholder="Controlled autosize"
            :auto-size="{ minRows: 3, maxRows: 5 }"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="button" style="float:left" @click="onBack">
            Cancelar
          </a-button>
          <a-button type="primary" html-type="submit" style="float:right">
            Salvar
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: this.$form.createForm(this, {
        name: '',
        description: ''
      })
    }
  },
  mounted () {
    this.getdatas()
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      const { id } = this.$route.params
      const _this = this
      this.form.validateFields(async function (err, values) {
        console.log(err)
        if (!err) {
          try {
            await _this.$axios.put(`/items/${id}`, values)
            alert('Salvo com sucesso')
          } catch (err) {
            console.warn(err)
          }
        } else {
          alert('Houve um problema, Tente mais tarde')
        }
      })
      this.$router.push('/home')
    },
    onBack (e) {
      const { id } = this.$route.params
      this.$router.push(`/${id}/details`)
    },
    async getdatas () {
      const { id } = this.$route.params
      const { data } = await this.$axios.get(`/items/${id}`)
      this.form.setFieldsValue(data)
    }
  },
  components: {}
}
</script>

<style>
/* Geral */
body {
  background-color: #010b29;
}
/* Logo com Titulo */
.topo {
  width: 100%;
  display: inline-block;
}
.logo {
  width: 75px;
  margin: 15px;
  margin-left: 8px;
  float: left;
}
.title {
  color: #00f4e2;
  font-size: 32px;
  margin: 20px 5px;
  float: left;
}
/* Conteúdo */
.containerDetail {
  width: 80%;
  height: 80%;
  margin: auto;
  float: right;
}
.image {
  position: relative;
  margin-top: 30px;
  float: left;
  width: 30%;
  height: 30%;
}
.texts {
  position: relative;
  float: left;
  width: 50%;
  height: 50%;
}
.imagePlanet {
  float: left;
  margin-top: 30px;
}
.planetName {
  color: white;
  font-size: 60px;
  margin: 10px;
}
.planetResume {
  color: white;
  font-size: 14px;
  margin: 10px;
}
</style>
