<template>
  <div
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="h-80 w-60 p-4 shadow-md hover:shadow-xl hover:cursor-pointer rounded-lg"
    @click="
      $emit('event-from-item', {
        name,
        price,
        quantity,
        image,
        discount,
        id,
        admin,
      })
    "
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
          (price/100 * discount > 0 ? price/100 + price/100*discount/100 : price/100 * 1).toFixed(2)
        }}
      </span>
      <div class="flex items-end justify-between">
        <span
          :class="
            discount > 0
              ? ['text-lg', 'text-green-500']
              : ['text-lg', 'text-black-500']
          "
          >R${{ (price/100).toFixed(2) }}</span
        >
        <div v-if="admin === true">
          <svg
            @click="sendSignal"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="isHovered ? 'fill-green-500' : 'fill-black'"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  props: {
    name: String,
    price: Number,
    quantity: Number,
    image: String,
    discount: Number,
    id: Number,
    admin: Boolean,
  },
  methods: {
    editItem() {
      if (this.admin === true) {
      } else {
        return;
      }
    },
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
