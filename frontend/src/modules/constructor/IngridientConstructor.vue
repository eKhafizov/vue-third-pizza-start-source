<script setup lang="ts">
const props = defineProps({
  ingridients: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Array,
    required: true,
  },
});
//const emit = defineEmits(["update:props.modelValue"]);

const model = props.modelValue;

const findQuantity = (id) => {
  const x = model.filter((item) => item.id === id)[0].quantity;
  return x;
}

// const t = (id) => {
//   emit("update:modelValue", ['ass', id])
// }
</script>

<template>
  <!-- ingridient list -->
  <div class="ingredients__filling">
    <p>Начинка:</p>
    <ul class="ingredients__list">
      <li
        v-for="ingridient in props.ingridients"
        :key="ingridient.id"
        :title="ingridient.name"
        class="ingredients__item">
        <span class="filling filling--mushrooms">{{ingridient.name}}</span>
        <div class="counter counter--orange ingredients__counter">
          <button type="button" class="counter__button counter__button--minus" >
            <span class="visually-hidden">Меньше</span>
          </button>
          <input type="text" name="counter" class="counter__input" :value="findQuantity(ingridient.id)">
          <button
            type="button"
            class="counter__button counter__button--plus"
            :value="ingridient.id"
          >
            <span class="visually-hidden">Больше</span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

