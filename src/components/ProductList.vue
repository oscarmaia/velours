<template>
  <div
    class="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4"
  >
    <Product
      v-for="(item, index) in itens"
      :name="item.name"
      :price="item.price"
      :quantity="item.quantity"
      :image="item.image"
      :discount="item.discount"
      :key="index"
      :admin="admin"
    ></Product>
  </div>
</template>

<script>
import Product from "./Product.vue";
import itens from "../assets/repository";
export default {
  props: {
    admin: Boolean,
  },
  components: {
    Product,
  },
  data() {
    return { itens };
  },
};
</script>
