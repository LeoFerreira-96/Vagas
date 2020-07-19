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
    <div class="containerDetail" :data-source="planet">
      <!-- Div com Imagem -->
      <div class="image">
        <a-card hoverable style="width: 250px">
          <img
            v-if="planet.url != '' && planet.url != undefined"
            slot="cover"
            alt="test"
            :src="planet.url"
            class="imagePlanet"
          />
          <img
            v-else
            slot="cover"
            alt="test"
            src="../../assets/error.png"
            class="imagePlanet"
          />
          <template slot="actions" class="ant-card-actions">
            <a-icon key="home" type="home" @click="onInit" />
            <a-icon key="edit" type="edit" @click="handleClick" />
          </template>
        </a-card>
      </div>
      <!-- Div com Textos -->
      <div class="texts">
        <h1 class="planetName">{{ planet.name }}</h1>
        <p class="planetResume">{{ planet.resume }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      planet: ''
    }
  },
  mounted () {
    this.getdatas()
  },
  methods: {
    handleClick (e) {
      const { id } = this.$route.params
      this.$router.push(`/${id}/edit`)
    },
    onInit (e) {
      this.$router.push('/home')
    },
    async getdatas () {
      const { id } = this.$route.params
      const { data } = await this.$axios.get(`/items/${id}`)
      this.planet = data
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
