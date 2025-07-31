import { reactive } from "vue";

const cart = reactive({
    items: [],
});

export const useCart = () => {
    const add = (product) => {
        cart.items.push(product);
    };

    const remove = (index) => {
        cart.items.splice(index, 1);
    };

    const count = computed(() => cart.items.length);

    return {
        cart,
        add,
        remove,
        count,
    };
};
