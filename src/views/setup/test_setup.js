import { onMounted, ref, reactive, computed, watch } from 'vue';

export default function setupTest() {
  const num = ref(0); // ref 转换为响应式数据

  // reactive 将复杂数据(object array map set weakmap weakset)转换为响应式数据
  const book = reactive({ title: 'Vue 3 Guide' }); 

  const watchColor = ref('rgb(0, 0, 0)');
  
  // methods ！setup 中的data取、赋值须使用 data.value
  function add() {
    if(num.value >= 80) {
      return;
    }
    num.value++;
  }

  function reduce() {
    if(num.value <= -80) {
      return;
    }
    num.value--;
  }

  // ！setup 基于 beforeCreated，在此之前执行，setup中不能添加 beforeCreated created；setup不属于vue生命周期

  // mounted
  onMounted(() => {
    console.log('test setup onMounted ->');
  })
  
  // computed
  const numPow = computed(() => num.value**2 );

  // watch
  watch(num, (newValue, oldValue) => {
    console.log(`num watch: ${oldValue} -> ${newValue}`)
    let num = Math.abs(newValue*10), r = 0, g = 0, b = 0;
    if(num <= 255) {
      b = num;
    } else if(num <= 2*255) {
      b = 255;
      g = num - 255;
    } else if (num <= 3*255) {
      b = g = 255;
      r = num - (2*255);
    } else {
      r = b = g = 255;
    }
    let color = `rgb(${r}, ${g}, ${b})`;
    watchColor.value = color;
  })

  return {
    num,
    book,
    add,
    reduce,
    numPow,
    watchColor
  }
}