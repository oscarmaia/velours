<template>
  <div
    :class="
      productSelected === true
        ? [
            'h-screen',
            ' w-screen',
            'fixed',
            ' z-50',
            ' top-0',
            ' left-0',
            'flex',
            'items-center',
            ' justify-center',
            'backdrop-blur-sm',
          ]
        : ['hidden']
    "
  >
    <div
      class="sm:w-4/6 sm:h-4/6 rounded-xl bg-white flex flex-col justify-center items-center"
    >
      <div class="flex flex-col sm:w-4/6 items-between justify-between">
        <div class="flex w-full">
          <h1 class="mx-auto">EDITAR ITEM - ID {{ edit.id }}</h1>
        </div>

        <form @submit="submitForm">
          <div id="container-edit" class="w-full">
            <div class="my-2">
              <span>Nome: </span
              ><input
                type="text"
                v-model="edit.name"
                :placeholder="edit.name"
              />
            </div>
            <div class="my-2">
              <span>Preço: </span
              ><input
                type="number"
                step="any"
                maxlength="100"
                v-model="edit.price"
                :placeholder="edit.price"
              />
            </div>
            <div class="my-2">
              <span>Desconto: </span
              ><input
                type="number"
                step="any"
                v-model="edit.discount"
                :placeholder="edit.discount + '%'"
              />
            </div>
            <div class="my-2">
              <span>Quantidade: </span
              ><input
                type="number"
                v-model="edit.quantity"
                :placeholder="edit.quantity"
              />
            </div>
            <div class="my-2">
              <span>URL: </span
              ><input
                type="text"
                v-model="edit.image"
                :placeholder="edit.image"
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
              type="submit"
              v-on:click="deleteItem"
              class="bg-red-800 rounded-md p-1 text-white font-bold"
            >
              DELETAR PRODUTO
            </button>
            <button
              type="button"
              v-on:click="closeOverlay"
              class="bg-red-400 rounded-md p-1 text-white font-bold"
            >
              CANCELAR
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <div>
      <h1 class="text-center text-2xl font-bold my-4">ADMIN PAGE</h1>
      <RouterLink id="add-product" to="/admin/add"
        ><h1 class="text-center text-2xl font-bold my-4 bg-green-200 rounded-lg p-2 hover:shadow-md hover:bg-green-600">
          ADICIONAR ITEM
        </h1></RouterLink
      >
    </div>
  </div>
  <ProductList
    @send-to-admin="handleInfoFromChild"
    class="my-4"
    :admin="admin"
    :updateProductList="updateProductList"
  ></ProductList>
</template>

<script>
import axios from "axios";
import ProductList from "../components/ProductList.vue";

export default {
  data() {
    return {
      itens: [],
      admin: true,
      productSelected: false,
      edit: {},
      updateProductList: false,
    };
  },
  components: {
    ProductList,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async deleteItem() {
      await axios
        .delete(
          `https://velours-api.onrender.com/products/${
            this.itens[this.edit.id]._id
          }`
        )
        .then((res) => {
          console.log("data deletada com sucesso", res.data);
          this.closeOverlay();
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleInfoFromChild(data) {
      this.edit = data;
      this.productSelected = true;
    },
    closeOverlay() {
      this.productSelected = false;
    },
    async submitForm(e) {
      e.preventDefault();
      const payload = {
        ...this.edit,
      };
      delete payload.admin;
      delete payload.id;
      await axios
        .put(
          `https://velours-api.onrender.com/products/${
            this.itens[this.edit.id]._id
          }`,
          payload
        )
        .then((res) => {
          this.closeOverlay();
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async fetchData() {
      await axios
        .get("https://velours-api.onrender.com/products")
        .then((res) => {
          this.itens = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
