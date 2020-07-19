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
    <div class="container">
      <!-- Barra de Pesquisa -->
      <div class="search">
        <a-input-search
        class="SearchBox"
        v-decorator="['search', {}]"
        placeholder="Procure por um Planeta"
        @change="handleSearch"
        />
      </div>
      <!-- Lista de Planetas -->
        <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 8, xxl: 3 }" :data-source="planets">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-card hoverable style="float:right margin: 30px">
              <img
                v-if="item.url !=''&&item.url != undefined"
                slot="cover"
                alt="test"
                :src="item.url"
              />
              <img
                v-else
                slot="cover"
                alt="test"
                src="../../assets/error.png"
              />
              <!-- <a slot="title" :href="item.href">{{ item.name.last }}</a> -->
              <a-card-meta :title="item.name" @click=" () => handleClick(item._id)">
                <template slot="item.description">
                </template>
              <!-- </a> -->
              </a-card-meta>
            </a-card>
          </a-list-item>
        </a-list>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      planets: []
    }
  },
  async mounted () {
    await Promise.all([await this.getPlanets(), await this.getItems()])
  },
  methods: {
    async getPlanets (searchByName = null) {
      const query = '?'
      const filters = []
      if (searchByName != null) {
        filters.push('name=' + searchByName)
      }
      const { data } = await this.$axios.get(`/items${query + filters.join('&')}`)
      this.planets = data.map(({ _id, name, description, resume }) => ({
        _id,
        name,
        description,
        resume
      }))
    },
    handleSearch (e) {
      this.searchByName = e.target.value
      console.log(e.target.value)
      this.getPlanets(this.searchByName)
    },
    async handleClick (id) {
      const { data } = await this.$axios.get(`/items/${id}`)
      if (data) {
        this.$router.push(`/${id}/details`)
      } else {
        alert('nao deu certo')
      }
    },
    async getItems () {
      let { data } = await this.$axios.get('/items')
      data = data.map(
        ({ _id, name, description, url }) => ({
          _id,
          name,
          description,
          url
        })
      )
      this.planets = data
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
.title{
  color:#00f4e2;
  font-size:32px;
  margin: 20px 5px;
  float: left;
}
/* Barra de Pesquisa */
input{
width: 500px;
height: 28px;
margin: 10px 8px;
}
.search{
  display: flex;
  justify-content: center;
  align-items: center;;
  margin:auto;
  margin-bottom: 30px;

}
/* Lista de Planetas */
.container {
  width: 80%;
  height: 80%;
  margin: auto;
}
.square {
  border-color: red;
}
</style>
