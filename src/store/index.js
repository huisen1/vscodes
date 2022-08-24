import { createStore } from 'vuex'
//createStore创建一个状态管理
export default createStore({
  // 定义需要的状态
  state: {
	  list:[
			{
				name:'吃饭',
				complete:false
			},
			{
				name:'睡觉',
				complete:false
			},
			{
				name:'敲代码',
				complete:true
			}
		]
  },
  
  getters: {
	  
  },
  // 同步修改state ， 都是方法
  //第一个参数state ，第二个参数是需要修改的值
  mutations: {
	  //添加任务
	  addTodo(state,payload){
		  state.list.push(payload);
	  },
	  //删除任务 splice(下标，个数)
	  delTodo(state,payload){
		  state.list.splice(payload,1)
	  },
	  clear(state,payload){
		  //把过滤之后的值传过来
		  state.list = payload
	  }
  },
  // 异步提交mutation
  //第一个参数store 第二个参数是修改的值
  actions: {
	  
  },
  // 模块化
  modules: {
	  
  }
})
