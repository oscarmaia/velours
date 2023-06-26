<template>
  <div class="h-screen w-screen fixed z-50 top-0 left-0 flex items-center justify-center">
    <div class="w-4/6  h-4/6 bg-red-300">
      <h1 class="text-center">CENTRO DA TELA</h1>
    </div>
  </div>
  <div>
    <h1 class="text-center text-2xl font-bold my-4">ADMIN PAGE</h1>
  </div>
  <ProductList class="my-4" :admin="admin"></ProductList>
</template>

<script>
import itens from "../assets/repository";
import ProductList from "../components/ProductList.vue";
export default {
  data() {
    return {
      itens,
      admin: true,
    };
  },
  components: {
    ProductList,
  },
};
</script>
