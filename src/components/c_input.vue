<template>
  <div class="custom-input-box">
    <input type="text" class="custom-input" :value="value" @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['value'],
  methods: {
    onInput(e) {
      this.$emit('update:value', e.target.value)
    }
  }
}
</script>

<style lang="scss">
  .custom-input-box {
    width: 100%;
    .custom-input {
      display: inline-block;
      width: 100%;
      height: 36px;
      padding: 5px 15px;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      outline: none;
      color: #606266;
    }
  }
</style>