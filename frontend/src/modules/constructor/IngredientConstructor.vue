<script setup lang="ts">
const props = defineProps({
  ingredients: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Array,
    required: true,
  },
});

const {modelValue} = props;

const findQuantity = (id) => {
  const x = modelValue.filter((item) => item.id === id)[0].quantity;
  return x;
}

const emit = defineEmits(["update:modelValue"]);

</script>


<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>
    <ul class="ingredients__list">
      <li
        v-for="ingredient of props.ingredients"
        :key="ingredient.id"
        :title="ingredient.name"
        class="ingredients__item">
        <span class="filling filling--mushrooms">{{ingredient.name}}</span>
        <div class="counter counter--orange ingredients__counter">

          <button type="button" class="counter__button counter__button--minus" >
            <span class="visually-hidden">Меньше</span>
          </button>
          <input type="text" name="counter" class="counter__input" :value="findQuantity(ingredient.id)"  disabled>
          <button
            type="button"
            class="counter__button counter__button--plus"
            @click="emit('update:modelValue', ([{quantity: 1}, {quantity: 2}]))"
          >
            <span class="visually-hidden">Больше</span>
          </button>

        </div>
      </li>
    </ul>
  </div>
</template>

