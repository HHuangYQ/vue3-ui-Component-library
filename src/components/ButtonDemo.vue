<template>
    <div>button 示例</div>
    <h1>示例1</h1>
    <div>
        <Buttons @click="onClick" 
        @focus="onClick" 
        @mouseover="onClick"
        >你好</Buttons>
    </div>

</template>

<script lang="ts">
import Buttons from '../lib/Buttons.vue'
export default {
    components: { Buttons },
    setup() {
        const onClick = () => {
            console.log('hi')
        }
        return { onClick }
    }
}
</script>
