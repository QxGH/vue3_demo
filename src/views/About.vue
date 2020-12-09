<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      Vuex - userInfo - name: {{userInfo.name}}
    </p>
    <p>
      Vuex - userInfo - avatar: 
      <img :src="userInfo.avatar" width="80" height="80" alt="">
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'About',
  computed: {
    ...mapState(['userInfo'])
  },
  mounted() {
    console.log('userInfo', this.userInfo);
  }
}
</script>

<style lang="scss">
  .about {
    p {
      margin-block: 15px;
    }
  }
</style>
