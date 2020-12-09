<template>
  <teleport to="body">
    <!-- 在组件中用 <teleport> 组件包裹需要渲染到外部的模板，然后通过 to 指定渲染的 DOM 节点 -->
    <!-- to 接收一个可以被 querySelector 识别的字符串参数，用于查找目标 DOM 节点，该 DOM 节点必须在组件外部 -->
    <!-- !!! 目标元素必须在挂载组件之前存在 -->
    <div class="dialog">
      <h1>
        <slot name="content">
          {{ msg }}
        </slot>
      </h1>
    </div>
  </teleport>
</template>

<script>
import { toRefs } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props, context) {
    // setup 中可以获取到 props 和 context
    const { attrs, slots, emit } = context;
    console.log('setup attrs', attrs);
    console.log('setup slots', slots);
    console.log('setup emit', emit);

    // 结构 props 需要用 toRefs
    const { msg } = toRefs(props);
    console.log('setup props msg', msg);
  },
  beforeUnmount() {
    // ！vue3中 beforeDestroy、destroy 被 beforeUnmount、unmount 取代
    console.log('beforeUnmount ->');
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .dialog {
    padding: 20px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 99;
    height: 100vh;
    width: 500px;
    background: rgba(0,0,0,.5);
    color: #fff;
  }
</style>
