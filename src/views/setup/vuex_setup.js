import { onMounted, ref } from "vue"

// 外部 js 使用 vuex
import { useStore } from 'vuex';  

// 外部 js 使用 vue-router
import { useRouter } from 'vue-router';

export default function vuexSetup() {
  // reactive 将复杂数据(object array map set weakmap weakset)转换为响应式数据
  const userInfo = ref({});

  const store = useStore();
  console.log('store -->', store);

  const router = useRouter();
  console.log('router -->', router);

  function getUserInfo() {
    // let errorUrl = 'https://www.bd.site';
    let url = 'https://www.fastmock.site/mock/bd760dd8ed7013045d3016137fe3801f/api/getUserInfo';
    fetch(url, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(res => {
      console.log("getUserInfo ~ res", res)
      userInfo.value = {...res.data};
      store.commit('CHANGE_USER_INFO', res.data);
    })
    .catch(err => {
      console.log(err);
      toError();
    })
  }

  function toError() {
    router.push({
      name: 'Error'
    })
  }

  onMounted(() => {
    getUserInfo()
  })
  
  return {
    userInfo,
    toError
  }
}