<template>
  <div class="layout">
    <div class="layout-header" id="header">
      <Header></Header>
    </div>
    <div class="layout-main" id="layoutMain">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/header';
export default {
  name: 'Layout',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  .layout {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .layout-header {
      height: 60px;
    }
    .layout-main {
      flex: 1;
      overflow: hidden;
      padding: 20px;
    }
  }
</style>