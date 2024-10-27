<script setup lang="ts">
defineProps({
  sizes: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
</script>


<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          v-for="size of sizes"
          :title="size.name"
          :key="size.id"
          class="diameter__input"
        >
          <input
            type="radio"
            name="diameter"
            :value="size.value"
            :checked="modelValue === size.value"
            class="visually-hidden"
            @input="emit('update:modelValue', size)"
          />
          <span> {{ size.name }} </span>
        </label>
      </div>
    </div>
  </div>
</template>
