
import ingredients from "@/mocks/ingredients.json";

const stateIngridients = ingredients.map((ingredient) => ({
    ...ingredient, quantity: 0,
}));
export default stateIngridients;
