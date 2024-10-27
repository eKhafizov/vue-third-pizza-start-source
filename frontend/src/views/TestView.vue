
<script setup>
import TestChild from "@/views/TestChild.vue";
import {ref} from "vue";
const testVar = ref('Fuck it');
const testNumber = ref(100500)
</script>


<template>
  <div>
    <h1 class="blue_back">This is Test Parent</h1>
    <TestChild
      :testVar='testVar'
      :testNumber='testNumber'
    />
  </div>
</template>

<style lang="scss" scoped>
.blue_back {
  background: #4990e2;
}
</style>
