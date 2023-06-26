<template>
  <div class="mx-auto flex flex-col sm:w-4/6 items-between justify-between">
    <div class="flex w-full">
      <h1 class="mx-auto">EDITAR ITEM</h1>
    </div>

    <form @submit="submitForm">
      <div id="container-edit" class="w-full">
        <div class="my-2">
          <span>Nome: </span
          ><input
            type="text"
            v-model="newProduct.name"
            :placeholder="'Item X'"
          />
        </div>
        <div class="my-2">
          <span>Preço: </span
          ><input
            type="number"
            step="any"
            v-model="newProduct.price"
            :placeholder="'12.47'"
          />
        </div>
        <div class="my-2">
          <span>Desconto: </span
          ><input
            type="number"
            step="any"
            v-model="newProduct.discount"
            :placeholder="15 + '%'"
          />
        </div>
        <div class="my-2">
          <span>Quantidade: </span
          ><input
            type="number"
            v-model="newProduct.quantity"
            :placeholder="'17'"
          />
        </div>
        <div class="my-2">
          <span>URL: </span
          ><input
            type="text"
            v-model="newProduct.image"
            :placeholder="'https://...'"
          />
        </div>
      </div>
      <div class="flex w-full items-center justify-between mt-4">
        <button
          type="submit"
          class="bg-green-400 rounded-md p-1 text-white font-bold"
        >
          CONFIRMAR
        </button>
        <button
          type="button"
          v-on:click="closeOverlay"
          class="bg-red-400 rounded-md p-1 text-white font-bold"
        >
          <RouterLink id="admin" to="/admin">CANCELAR</RouterLink>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { addItem } from "../assets/repository";

export default {
  data() {
    return {
      newProduct: {},
    };
  },

  methods: {
    submitForm(e) {
      e.preventDefault();
      this.newProduct;
      console.log(this.newProduct);
      addItem(this.newProduct);
      this.$router.push("/admin");
    },
  },
};
</script>
