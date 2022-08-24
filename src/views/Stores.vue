<template>
  <div>
    <button @click="action">开始任务</button>
    <!-- <com :msg='msg' @send="send"></com> -->
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import com from "./com";
export default defineComponent({
  name: "Stores",
  components: {
    com
  },
  setup() {
    let router = useRouter();
    let action = () => {
      //路由一，直接跳转
      //router.push('/home')

      //路由二,跳转并传递query参数，地址栏显示参数，相当于ajax.get请求，页面刷新后参数不消失
      // router.push({
      // 	//使用name、path都可以传递
      // 	//path:'/home',
      // 	name:'Home',
      // 	query:{
      // 		name:'stores',
      // 		num:111
      // 	}
      // })

      //路由三，跳转并传递params参数，地址栏不显示参数，相当于ajax.post请求，页面刷新后参数消失
      router.push({
        //只能使用name传递
        name: "Home",
        params: {
          name: "stores",
          num: 111
        }
      });
    };
    let msg = ref("父组件值");
    let send = val => {
      console.log(val);
    };
    return {
      router,
      action,
      msg,
      send
    };
  }
});
</script>