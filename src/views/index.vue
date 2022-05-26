<template>
  <a-input v-model:value="valuell" placeholder="Basic usage" data-test="testForm.name"/>
  <button >Increment</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const valuell = ref<string>('ss');
    return {
      valuell,
    };
  },
});
</script>

