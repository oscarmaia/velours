<template>
  <div
    class="h-80 w-60 p-4 shadow-md hover:shadow-xl hover:cursor-pointer rounded-lg"
  >
    <div class="h-52 flex justify-center items-start">
      <img class="rounded-md h-full object-cover" :src="image" />
    </div>
    <div class="flex flex-col justify-start">
      <h1 class="">{{ name }}</h1>
      <span
        :class="
          discount !== 0
            ? ['text-sm', 'line-through', 'text-gray-400']
            : ['text-sm', 'line-through', 'text-transparent', 'unselectable']
        "
      >
        R${{
          (price * discount > 0 ? price + discount / 100 : price * 1).toFixed(2)
        }}
      </span>
      <span
        :class="
          discount > 0
            ? ['text-lg', 'text-green-500']
            : ['text-lg', 'text-black-500']
        "
        >R${{ price.toFixed(2) }}</span
      >
      <span>{{ id }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    quantity: Number,
    image: String,
    discount: Number,
    id:Number
  },
};
</script>

<style>
.unselectable {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none; /* Standard */
}
</style>
