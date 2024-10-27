<script setup>
defineProps({
  dough: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(["update:modelValue"])
</script>

<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <label
            v-for="doughType of dough"
            :key="doughType.id"
            :title="doughType.name"
            class="dough__input dough__input--light">
          <input
              type="radio"
              name="dought"
              value={{doughType.name}}}
              class="visually-hidden"
              :checked="doughType === modelValue"
              @input="emit('update:modelValue', doughType)"
          >
          <b>{{doughType.name}}</b>
          <span>{{doughType.description}}</span>
        </label>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>
