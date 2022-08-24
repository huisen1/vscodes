<template>
    <div>
        这是子组建
        <button @click="send">传值</button>
    </div>
</template>
<script>
import {defineComponent ,ref} from 'vue'
export default defineComponent({
    name:'com',
    props: {
        msg:{
            type:String
        }
    },
    setup(props,ctx) {
        let msgz = ref('子组建值')
        let send = () => {
            ctx.emit('send',msgz.value)
        }
        console.log(props.msg)
        return {
            msgz,
            send
        }
    }
})
</script>
