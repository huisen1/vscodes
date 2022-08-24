<template>
	<div class="footers">
		已完成{{isComplete}}/全部{{list.length}}<button type="button" v-if="isComplete>0" @click="isclear">清除已完成</button>
	</div>
</template>

<script>
import {defineComponent ,ref ,computed} from 'vue'
export default defineComponent({
	name:'Navfooter',
	props: {
		list:{
			type:Array,
			required:true
		}
	},
	setup(props,ctx){
		let isComplete = computed(()=>{
			//过滤已完成
			let arr = props.list.filter(item=>{
				return item.complete
			})
			return arr.length
		})
		let isclear = ()=>{
			let arr = props.list.filter(item=>{
				return item.complete === false
			})
			ctx.emit('clear',arr)
		}
		return {
			isComplete,
			isclear
		}
	}
})

</script>

<style scoped lang="scss">
	.footers{
		display: flex;
		margin-top: 10px;
		justify-content: space-between;
	}
</style>
