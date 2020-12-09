<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 16px;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html, body, #app {
  height: 100%;
}

button {
  border: none;
  background: #409eff;
  color: #fff;
  border-radius: 4px;
  outline: none;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    opacity: .9;
  }
  &+button {
    margin-left: 20px;
  }
  &:disabled {
    background: #a0cfff;
    cursor: not-allowed;
  }
}

.c-blue {
  color: #409eff;
}

</style>
