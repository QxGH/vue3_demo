<template>
  <div class="home">
    <template v-if="showComponents">
      <hello-world msg="Welcome to Your Vue.js App">
        <template #content>
          <!-- 具名插槽 v-slot:content 简写为 #content-->
          hello-world component named slots content
        </template>
      </hello-world>
    </template>
    <p>
      name: <span class="c-blue">{{name}}</span>
    </p>
    <p>
      num: <span class="c-blue">{{num}}</span>
    </p>
    <p>
      numPow: <span class="c-blue">{{numPow}}</span>
    </p>
    <p>
      numAbs: <span class="c-blue">{{numAbs}}</span>
    </p>
    <p>
      book title: <span class="c-blue">{{book.title}}</span>
    </p>
    <p>
      <button @click="add">add btn</button>
      <button @click="reduce">reduce btn</button>
    </p>
    <p>
      <button @click="show" :disabled="showComponents">show</button>
      <button @click="hide" :disabled="!showComponents">hide</button>
    </p>
    <p>
      <button @click="toError">toError</button>
    </p>
    <p>
      <span>v-model</span>
      <c-input v-model:value="inputValue" style="width: 360px;"></c-input>
    </p>
  </div>
</template>

<script>
import HelloWorld from '@/components/hello_world'
import CInput from '@/components/c_input'
import testSetup from './setup/test_setup';
import vuexSetup from './setup/vuex_setup';
import { onMounted } from 'vue';

export default {
  name: 'Home',
  data() {
    return {
      showComponents: true,
      inputValue: 'c-input value'
    }
  },
  components: {
    HelloWorld,
    CInput
  },
  mounted() {
    console.log('home onMounted ->')
  },
  methods: {
    show() {
      this.showComponents = true;
    },
    hide() {
      this.showComponents = false;
    }
  },
  watch: {
    inputValue(newValue, oldValue) {
      console.log(`inputValue watch: ${oldValue} -> ${newValue}`)
    }
  },
  setup() {

    let { num, book, add, reduce, numPow, numAbs } = testSetup();
    let { toError } = vuexSetup();

    const name = 'Vue 3';

    // 有多个 onMounted 时，setup中的 onMounted 先按顺序执行，组件中 mounted 最后执行
    onMounted(() => {
      console.log('home setup onMounted ->')
    })

    return {
      name,
      num,
      book,
      add,
      reduce,
      numPow,
      numAbs,
      toError
    }
  },
}
</script>

<style lang="scss">
.home {
  p {
    margin-block: 15px;
  }
}
</style>
