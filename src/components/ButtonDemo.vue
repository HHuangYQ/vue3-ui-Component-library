<template>
    <div>button 示例</div>
    <h1>示例1</h1>
    <div>
        <Buttons>你好</Buttons>
        <Buttons theme="button">你好</Buttons>
        <Buttons theme="link">你好</Buttons>
        <Buttons theme="text">你好</Buttons>

    </div>
     <h1>示例2</h1>
    <div>
         <Buttons size="big">大大大</Buttons>
        <Buttons>普普通</Buttons>
        <Buttons size="small">小小小</Buttons>
    </div>
     <div>
         <Buttons size="big" theme="link">大大大</Buttons>
        <Buttons theme="link">普普通</Buttons>
        <Buttons size="small" theme="link">小小小</Buttons>
    </div>
     <div>
         <Buttons size="big" theme="text">大大大</Buttons>
        <Buttons theme="text">普普通</Buttons>
        <Buttons size="small" theme="text">小小小</Buttons>
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
