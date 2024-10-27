<script setup lang="ts">
defineProps({
  sauces: {
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
  <!-- sauces-->
  <div class="ingredients__sauce">
    <p>Основной соус:</p>
    <label
      v-for="sauce of sauces"
      :key="sauce.name"
      :title="sauce.name"
      class="radio ingredients__input"
    >
      <input
        type="radio"
        name="saucing"
        :value="sauce.name"
        :checked="sauce === modelValue"
        class="visually-hidden"
        @input="emit('update:modelValue', sauce)"
      />
      <span>{{ sauce.name }}</span>
    </label>
  </div>
</template>

