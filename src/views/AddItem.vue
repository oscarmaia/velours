<template>
  <div class="p-4 mx-auto flex flex-col sm:w-4/6 md:w-3/6 lg:w-3/6 2xl:w-2/6 items-between justify-between">
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
            :placeholder="'NOME DO PRODUTO'"
          />
        </div>
        <div class="my-2">
          <span>Preço: </span
          ><input
            type="number"
            v-model="newProduct.price"
            :placeholder="'1240=12,40(valor em centavos)'"
          />
        </div>
        <div class="my-2">
          <span>Desconto: </span
          ><input
            type="number"
            v-model="newProduct.discount"
            :placeholder="'valor inteiro 0 - 100'"
          />
        </div>
        <div class="my-2">
          <span>Quantidade: </span
          ><input
            type="number"
            v-model="newProduct.quantity"
            :placeholder="'Qtd. em estoque'"
          />
        </div>
        <div class="my-2">
          <span>URL: </span
          ><input
            type="text"
            v-model="newProduct.image"
            :placeholder="'URI da imagem do produto'"
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
import axios from "axios";
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      newProduct: {},
    };
  },

  methods: {
    submitForm(e) {
      e.preventDefault();
      console.log(this.newProduct);
      axios
        .post("https://velours-api.onrender.com/products", this.newProduct)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
