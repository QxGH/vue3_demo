import { onMounted, ref, reactive, computed, watch } from 'vue';

export default function setupTest() {
  const num = ref(0); // ref 转换为响应式数据

  // reactive 将复杂数据(object array map set weakmap weakset)转换为响应式数据
  const book = reactive({ title: 'Vue 3 Guide' }); 

  const numAbs = ref(0);
  
  // methods ！setup 中的data取、赋值须使用 data.value
  function add() {
    num.value++;
  }

  function reduce() {
    num.value--;
  }

  // ！setup 基于 beforeCreated，在此之前执行，setup中不能添加 beforeCreated created；setup不属于vue生命周期

  // mounted
  onMounted(() => {
    console.log('test setup onMounted ->');
  })
  
  // computed
  const numPow = computed(() => num.value**num.value );

  // watch
  watch(num, (newValue, oldValue) => {
    console.log(`num watch: ${oldValue} -> ${newValue}`)
    numAbs.value = Math.abs(newValue);
  })

  return {
    num,
    book,
    add,
    reduce,
    numPow,
    numAbs
  }
}