<template>
	<div class="headers">
		<input type="text" placeholder="请输入任务" v-model="renwu" @keydown.enter="enter"/>
	</div>
</template>

<script>
import {defineComponent ,ref} from 'vue'
export default defineComponent({
	name:'Navheader',
	setup(props,ctx){
		let renwu = ref('');
		//回车按下事件
		let enter = ()=>{
			//把输入框的内容传给父组件
			ctx.emit('add',renwu.value)
			renwu.value=''
		}
		return {
			renwu,
			enter
		}
	}
})
</script>

<style scoped lang="scss">
	.headers{
		width: 100%;
		height: 20px;
		text-align: center;
		line-height: 20px;
		input{
			width: 200px;
			margin: 0 auto;
			outline: none;
			line-height: 100%;
			font-size: 14px;
			padding: 2px 4px;
		}
	}
</style>
