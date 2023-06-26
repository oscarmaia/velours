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
    ></Product>
  </div>
</template>

<script>
import Product from "./Product.vue";

let arr = [
  {
    name: "Camisa 1",
    discount: 20,
    price: 12.74,
    quantity: 12,
    image: "https://example.com/image1.jpg",
  },
  {
    name: "Camisa 2",
    discount: 10,
    price: 22.14,
    quantity: 7,
    image: "h e.com/image2.jpg",
  },
  {
    name: "Camisa 3",
    discount: 0,
    price: 10.46,
    quantity: 9,
    image: "https://example.com/image3.jpg",
  },
  {
    name: "Camisa 4",
    discount: 30,
    price: 9.72,
    quantity: 14,
    image: "https://example.com/image4.jpg",
  },
  {
    name: "Camisa 5",
    discount: 15,
    price: 18.99,
    quantity: 5,
    image: "https://example.com/image5.jpg",
  },
  {
    name: "Camisa 6",
    discount: 0,
    price: 14.25,
    quantity: 8,
    image: "https://example.com/image6.jpg",
  },
  {
    name: "Camisa 7",
    discount: 40,
    price: 11.99,
    quantity: 11,
    image: "https://example.com/image7.jpg",
  },
  {
    name: "Camisa 8",
    discount: 0,
    price: 16.88,
    quantity: 6,
    image: "https://example.com/image8.jpg",
  },
  {
    name: "Camisa 9",
    discount: 25,
    price: 13.49,
    quantity: 10,
    image: "https://example.com/image9.jpg",
  },
  {
    name: "Camisa 10",
    discount: 0,
    price: 17.75,
    quantity: 4,
    image: "https://example.com/image10.jpg",
  },

  {
    name: "Camisa 1",
    discount: 20,
    price: 12.74,
    quantity: 12,
    image: "https://example.com/image1.jpg",
  },
  {
    name: "Camisa 2",
    discount: 10,
    price: 22.14,
    quantity: 7,
    image: "https://example.com/image2.jpg",
  },
  {
    name: "Camisa 3",
    discount: 0,
    price: 10.46,
    quantity: 9,
    image: "https://example.com/image3.jpg",
  },
  {
    name: "Camisa 4",
    discount: 30,
    price: 9.72,
    quantity: 14,
    image: "https://example.com/image4.jpg",
  },
  {
    name: "Camisa 5",
    discount: 15,
    price: 18.99,
    quantity: 5,
    image: "https://example.com/image5.jpg",
  },
  {
    name: "Camisa 6",
    discount: 0,
    price: 14.25,
    quantity: 8,
    image: "https://example.com/image6.jpg",
  },
  {
    name: "Camisa 7",
    discount: 40,
    price: 11.99,
    quantity: 11,
    image: "https://example.com/image7.jpg",
  },
  {
    name: "Camisa 8",
    discount: 0,
    price: 16.88,
    quantity: 6,
    image: "https://example.com/image8.jpg",
  },
  {
    name: "Camisa 9",
    discount: 25,
    price: 13.49,
    quantity: 10,
    image: "https://example.com/image9.jpg",
  },
  {
    name: "Camisa 10",
    discount: 0,
    price: 17.75,
    quantity: 4,
    image: "https://example.com/image10.jpg",
  },
];

export default {
  components: {
    Product,
  },
  data() {
    return { arr };
  },
};
</script>
