<template>
	<div class="todolist">
		<Navheader></Navheader>
		<Navmain></Navmain>
		<Navfooter></Navfooter>
		<!-- 数据测试
		<div>{{ num }}</div>
		<div>{{ str }}</div>
		<div>{{ arr }}</div>
		<div>{{ obj }}</div>
		<div @click="numfun2('num2')">
			{{num}}
		</div>
		<div @click="strfun2('str2')">
			{{str}}
		</div>
		<div>
			{{num1}}++++{{num2}}====={{addNum}}
			<button type="button" @click="adds">加</button>
		</div> -->
		<div><button @click="goto">去about</button></div>
	</div>
	
</template>

<script>
import Navheader from '../components/navheader/Navheader.vue'
import Navmain from '../components/navmain/Navmain.vue'
import Navfooter from '../components/navfooter/Navfooter.vue'
import {defineComponent ,ref ,reactive ,toRefs ,computed} from 'vue' 
import {useStore} from 'vuex' //状态管理
import {useRouter,useRoute} from 'vue-router' //路由
export default defineComponent({
  name: 'Home',
  components: {
    Navheader,
	Navmain,
	Navfooter
  },
  setup(porps,ctx){
	  //ref定义
		  // let num = ref(10)
		  // let str = ref('string')
		  // let arr = ref(['a','b','c',10])
		  // let obj = ref({age:18})
		  //方法
		  // let numfun2 = (val) => {
		  // 			  console.log(val)
		  // }
		  // let strfun2 = (val) => {
			 //  console.log(val)
		  // }
	  //reactive定义
	  // let data = reactive({
		 //  num: 15,
		 //  str: 'stsssing',
		 //  arr: ['d','b',10],
		 //  obj: {age:70},
		 //  //方法
		 //  numfun1(val){
			//   console.log(val)
		 //  },
		 //  strfun1(val){
		 //  			  console.log(val)
		 //  }
	  // })
	  //computed 计算属性
	  // let num1 = ref(10)
	  // let num2 = ref(20)
	  // let addNum = computed(()=>{
		 //  return num1.value + num2.value
	  // })
	  // let adds = ()=>{
		 //  num1.value++
		 //  num2.value++
	  // }
		//   let router= useRouter()
		//   let goto = ()=>{
		// 	  //push 函数传入跳转的路径
		// 	  //back 回退到上一页
		// 	  //forward 去到下一页
		// 	  //go(整数) 传入正数前进，负数回退
		// 	  //router.push('/about')
		// 	  router.push({push:'/about'})//作用同上，传参使用
		//   }
	  let store = useStore()
	  let route = useRoute()
	  //接受打印路由query参数
	  //console.log(route.query)
	  //接受打印路由params参数
	  console.log(route.params)
	  let list = computed(()=>{
		  return store.state.list
	  })
	  return {
		  //ref定义，直接调用
			  // num,
			  // str,
			  // arr,
			  // obj
		  //reactive定义,用'data.'调用
			  //data
		  //reactive定义toRefs解构，直接调用
		  // ...toRefs(data),
		  // numfun2,
		  // strfun2
		  // num1,
		  // num2,
		  // addNum,
		  // adds
		  // router,
		  // goto
		  store,
		  list
		 
	  }
  }
})
</script>
<style scoped lang="scss">
	.todolist{
		width: 220px;
		margin: 0 auto;
		margin-top: 50px;
	}
</style>