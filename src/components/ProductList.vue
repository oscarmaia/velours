<template>
  <div
    class="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4"
  >
    <Product
      v-for="(item, index) in arr"
      :name="item.name"
      :price="item.price"
      :quantity="item.quantity"
      :image="item.image"
      :discount="item.discount"
      :key="index"
      :id="index"
      :admin="admin"
      @event-from-item="sendDirectlyToAdmin"
    ></Product>
  </div>
</template>

<script>
import Product from "./Product.vue";
import axios from "axios";
export default {
  props: {
    admin: Boolean,
  },
  components: {
    Product,
  },

  data() {
    return {
      arr: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://velours-api.onrender.com/products")
        .then((res) => {
          this.arr = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendDirectlyToAdmin(data) {
      this.$emit("send-to-admin", data);
    },
  },
};
</script>
