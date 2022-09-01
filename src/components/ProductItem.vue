<template>
  <ul class="flex flex-grow flex-wrap items-list justify-around">
    <li
      v-for="item in items"
      :key="item.id"
      @click.prevent="addProduct(item)"
      :class="{
        selected: selectedItems.some((product) => product.id === item.id),
      }"
      class="
        w-1/3
        drop-shadow-lg
        bg-white
        rounded-full
        item
        mb-10
        flex flex-row
        items-center
        align-center
        justify-between
        px-6
        text-purple
        hover:cursor-pointer hover:bg-purple hover:text-white
      "
    >
      <div
        class="
          circled-border
          flex
          h-8
          w-8
          justify-center
          items-center
          rounded-full
          border-purple border-2
          hover:border-white
        "
      >
        <i class="fa fa-check hover:text-white"></i>
      </div>
      <span class="text-base justify-center text-center">{{ item.name }}</span>
      <div class="flex flex-col uppercase text-lightpurple text-xs font-bold">
        Estimate
        <span class="text-sm font-normal text-purple price"
          >&pound;&nbsp;{{ item.price.toFixed(2) }}</span
        >
      </div>
    </li>
  </ul>
  <div class="flex flex-row justify-evenly">
    <div>&nbsp;</div>
    <div
      class="
        total-price
        drop-shadow-lg
        bg-white
        rounded-full
        text-black
        item
        mb-10
        flex flex-row
        items-center
        align-center
        justify-between
        px-6
        hover:cursor-pointer
      "
    >
      <div
        class="
          flex
          justify-center
          items-center
          uppercase
          font-bold
          text-base text-purple
        "
      >
        Total
      </div>
      <div class="flex flex-col uppercase text-lightpurple text-xs font-bold">
        <span class="text-xxl text-red font-normal"
          >&pound;&nbsp;{{ this.totalPrice.toFixed(2) }}</span
        >
      </div>
    </div>
    <div>3</div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    items: {
      typeof: "Array",
    },
  },
  data() {
    return {
      selectedItems: [],
      itemSelected: false,
    };
  },
  computed: {
    totalPrice() {
      return this.selectedItems.reduce(
        (total, product) => (total += product.price),
        0
      );
    },
  },
  methods: {
    addProduct(product) {
      var index = this.selectedItems.findIndex(
        (item) => item.id === product.id
      );

      if (index === -1) {
        this.selectedItems.push(product);
      } else {
        this.selectedItems.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.total-price {
  width: 324px;
  height: 72px;
}
li.selected {
  background-color: #5f259f;
}
li.selected .circled-border {
  border-color: #ffffff;
}
li.selected {
  color: #ffffff;
}
li.selected i {
  color: #ffffff;
}
li.selected span.price {
  color: #ffffff;
}
li:hover .circled-border {
  border-color: #ffffff;
}
li:hover span.price {
  color: #ffffff;
}
</style>