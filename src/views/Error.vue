<template>
  <div class="error">
    <h1>error</h1>
    <button @click="goBack">go back</button>
  </div>
</template>

<script>
export default {
  name: 'Error',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>