<template>
    <div>dialog文档</div>
    <h1>示例1</h1>
    <Buttons @click="toggle">toggle</Buttons>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
        <template v-slot:content>
            <div>你好</div>
            <div>hi</div>
        </template>
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
    </Dialog>
</template>


<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Buttons from '../lib/Buttons.vue'
import { ref } from 'vue'
export default {
    components: { Dialog, Buttons },
    setup() {
        const x = ref(false)
        const toggle = () => {
            x.value = !x.value
        }
        const f1 = () => {
            return false
        }
        const f2 = () => { }
        return { x, toggle, f1, f2 }
    }
}
</script>