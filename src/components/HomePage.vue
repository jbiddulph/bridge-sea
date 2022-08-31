<template>
  <div
    class="main-content relative"
    :style="{
      'background-size': 'cover',
      '-webkit-filter': 'blur(8px)',
      filter: 'blur(8px)',
      width: '100vw',
      height: '100vh',
    }"
  >
    <div
      :style="{
        '-webkit-filter': 'blur(px)',
        filter: 'blur(0px)',
      }"
    >
      <h2 class="text-3xl font-bold underline z-10">
        Calculating your total costs
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
};
</script>

<style>
.container {
  z-index: 10;
  filter: blur(0px);
  -webkit-filter: blur(0px);
}
h2 {
  color: #db2f20;
}
.main-content {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("@/assets/background-office.png");
}
</style>
