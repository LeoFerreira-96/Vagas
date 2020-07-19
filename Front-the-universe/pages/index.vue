<template>
  <div>
    <img
      class="displayed"
      slot="cover"
      alt="The Universe"
      src="../assets/logo.png"
    />
    <div class="container">
      <Button type="primary" block @click="handleClick">
        Entrar
      </Button>
    </div>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'

export default {
  components: {
    Button
  },
  methods: {
    handleClick (e) {
      this.$router.push('/home')
    }
  }
}
</script>

<style>
body {
  background-color: #010b29;
  overflow: hidden;
}
.displayed {
  width: 15%;
  height: 15%;
  margin: 8%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.container {
  width: 15%;
  height: 15%;
  margin: 0 auto;
}
</style>
