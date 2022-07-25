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
    <h1>示例3</h1>
    <div>
        <Buttons level="main">主要按钮</Buttons>
        <Buttons>普通按钮</Buttons>
        <Buttons level="danger">危险按钮</Buttons>
    </div>
    <div>
        <Buttons level="main" theme="link">主要链接按钮</Buttons>
        <Buttons theme="link">普通链接按钮</Buttons>
        <Buttons level="danger" theme="link">危险链接按钮</Buttons>
    </div>
    <div>
        <Buttons level="main" theme="text">主要文字按钮</Buttons>
        <Buttons theme="text">普通文字按钮</Buttons>
        <Buttons level="danger" theme="text">危险文字按钮</Buttons>
    </div>
    <h1>示例4</h1>
    <div>
        <Buttons disabled>禁用按钮</Buttons>
        <Buttons theme="link" disabled>禁用链接按钮</Buttons>
        <Buttons theme="text" disabled>禁用按钮</Buttons>
    </div>
    <div>
        <h1>示例5</h1>
        <Buttons loading>加载中</Buttons>
         <Buttons>加载完毕</Buttons>
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
