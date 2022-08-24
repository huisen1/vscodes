<template>
	<div v-if='list.length>0'>
		<div v-for="(item,index) in list" :key='index' class="mainlist">
			<div>
				<input type="checkbox" v-model="item.complete" />{{item.name}}
			</div>
			<button type="button" class="btn" @click="isdel(index)">删除</button>
		</div>
	</div>
	<div v-else>
		<div class="mainlist"> 
			暂无任务
		</div>
	</div>
</template>

<script>
import {defineComponent ,ref} from 'vue'
export default defineComponent({
	name:'Navmain',
	props: {
		list:{
			type:Array,
			required:true
		}
	},
	emits:['del'],
	setup(props,ctx){
		let isdel = (item)=>{
			ctx.emit('del', item)
		}
		return {
			isdel
		}
	}
})

</script>

<style scoped lang="scss">
	.mainlist{
		width: 100%;
		height: 30px;
		line-height: 30px;
		display: flex;
		margin-top: 10px;
		justify-content: space-between;
		cursor: pointer;
		.btn{
			width: 50px;
			height: 30px;
			display: none;
		}
		&:hover{
			.btn{
				display: block;
			}
		}
	}
</style>
