<script setup>
defineProps({
  testVar: { type: String, required: true},
  testNumber: {type: Number, required: true},
});
</script>

<template>
  <div>
    <h2 class="blue-back">This is Child Text</h2>
    <p class="red_shit">{{testVar}}</p>
    <p class="purple_shit_shit">{{testNumber}}</p>
  </div>
</template>

<style lang="scss" scoped>
.blue-back {background-color: aqua;}
.red_shit {background-color: #E20338;}
.purple_shit {background-color: #38A413;}
</style>
