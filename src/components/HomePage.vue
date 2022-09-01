<template>
  <div
    class="main-content relative"
    :style="{
      'background-size': 'cover',
      'backdrop-filter': 'blur(5px)',
      //filter: 'blur(8px)',
    }"
  >
    <div
      :style="{
        '-webkit-filter': 'blur(0px)',
        'backdrop-filter': 'blur(0px)',
        filter: 'blur(0px)',
      }"
      class="md:max-w-screen-lg mx-auto"
    >
      <h2
        class="
          text-xl text-red
          font-bold
          z-10
          pt-28
          pb-14
          uppercase
          text-center
        "
      >
        Calculating your total costs
      </h2>
      <transition name="products-fade">
        <ProductItem v-if="loadedProducts" :items="productItems" />
      </transition>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  name: "HomePage",
  components: {
    ProductItem,
  },
  data() {
    return {
      loadedProducts: false,
      productItems: [
        {
          id: 1,
          name: "Identity requirements",
          price: 6.0,
        },
        {
          id: 2,
          name: "Request a quotation",
          price: 3.0,
        },
        {
          id: 3,
          name: "Find products",
          price: 16.0,
        },
        {
          id: 4,
          name: "Raise an order",
          price: 6.0,
        },
        {
          id: 5,
          name: "Authorise sale",
          price: 21.55,
        },
        {
          id: 6,
          name: "Pay provider",
          price: 13.0,
        },
        {
          id: 7,
          name: "Deliver product",
          price: 4.3,
        },
        {
          id: 8,
          name: "Invoice check",
          price: 6.0,
        },
        {
          id: 9,
          name: "Place order",
          price: 6.5,
        },
      ],
      totalPrice: 0,
    };
  },
  mounted() {
    this.loadedProducts = true;
  },
};
</script>

<style>
.container {
  z-index: 10;
  filter: blur(0px);
  -webkit-filter: blur(0px);
}
.main-content {
  z-index: 1;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("@/assets/background-office.png");
  min-width: "100vw";
  min-height: "100vh";
}
li.item {
  width: 324px;
  height: 72px;
}
.products-fade-enter-from {
  opacity: 0;
}
.products-fade-enter-to {
  opacity: 1;
}
.products-fade-enter-active {
  transition: all 2s ease-in;
}
.products-fade-leave-from {
  opacity: 1;
}
.products-fade-leave-to {
  opacity: 0;
}
.products-fade-leave-active {
  transition: all 2s ease-out;
}
</style>
