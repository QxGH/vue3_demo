<template>
  <div class="header">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- <button @click="toAbout">to about</button> -->
    </div>
  </div>
</template>

<script>
import vuexSetup from '../setup/vuex_setup';

export default {
  name: 'Header',
  setup() {
    let { userInfo } = vuexSetup();

    return {
      userInfo
    }
  }
}
</script>

<style lang="scss">
.header {
  height: 100%;
  line-height: 60px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 4px;
}
#nav {
  padding: 0 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #409eff;
    }
  }
}
</style>