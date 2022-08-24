<template>
	<div class="todolist">
		<Navheader @add="add"></Navheader>
		<Navmain :list='list' @del='del'></Navmain>
		<Navfooter :list='list' @clear='clear'></Navfooter>
	</div>
	
</template>

<script>
import Navheader from '../components/navheader/Navheader.vue'
import Navmain from '../components/navmain/Navmain.vue'
import Navfooter from '../components/navfooter/Navfooter.vue'
import {defineComponent,ref,computed} from 'vue' 
import {useStore} from 'vuex'
export default defineComponent({
  name: 'Home',
  components: {
    Navheader,
	Navmain,
	Navfooter
  },
  setup(porps,ctx){
	  let store = useStore()
	  let value = ref('')
	  let add=(val)=>{
		  value.value=val
		  //调用mutations
		  let flag = true

		  list.value.map((item)=>{
			  if(item.name===value.value){
				  flag=false
				  alert('任务已存在')
			  }else{
				  
			  }
		  })

		  if(flag==true){
			  store.commit('addTodo',{
				name:value.value,
				complete:false
		  	  })
		  }
		  
	  }
	  let list = computed(()=>{
		  return store.state.list
	  })
	  let del = (val)=>{
		  store.commit('delTodo',val)
	  }
	  let clear = (val)=>{
		  store.commit('clear',val)
	  }
	  return {
		  add,
		  value,
		  list,
		  del,
		  clear
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