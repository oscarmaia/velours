<script>
import ProductList from "../components/ProductList.vue";
export default {
  components: {
    ProductList,
  },
};
</script>

<template>
  <div class="container mx-auto grid grid-cols-5 gap-2 mb-4">
    <div class="col-span-3 text-5xl font-bold">
      <h1>Aumente o seu estilo com esses itens do momento!</h1>
    </div>
    <img
      class="col-span-1 rounded-md"
      src="https://cdn.shopify.com/s/files/1/0669/7546/5690/products/Sa3576218c0ac4227bd2a6ce0690244a1u_200x.jpg?v=1667878025"
    />
    <img
      class="col-span-1 rounded-md"
      src="https://cdn.shopify.com/s/files/1/0669/7546/5690/products/Sbfc3e006920f45b29d040cb4385ae143J_200x.jpg?v=1668488170"
    />
  </div>
  <div class="container mx-auto">
    <ProductList class="my-4"></ProductList>
  </div>
</template>
