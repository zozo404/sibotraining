<template>
  <header>
  <nav class="flex items-center bg-olive-50 justify-between p-6">
    <!-- add img with prismic -->
    <!-- <img :src="header.logo_sibo.url" alt="" /> -->
    <img src="../static/img/logo.png" alt="logo Sibo" />
    <!-- btn navbar -->
    <div class="space-y-2" @click="toggle">
      <i class="fa-solid fa-bars text-white h-7"></i>
    </div>
  </nav>
  <!-- btn navbar active -->
  <nav :class="{ hidden: isActive }" class="lg:hidden w-screen absolute top-0 h-screen z-40 bg-olive-50 transition duration-500 ease-in-out">
    <div class="flex items-center bg-olive-50 justify-between p-6">
      <!-- add img with prismic -->
      <!-- <img :src="header.logo_sibo.url" alt="" /> -->
      <img src="../static/img/logo.png" alt="logo Sibo" />
      <!-- btn navbar -->
      <div class="space-y-2" @click="toggle">
        <i class="fa-solid fa-xmark text-white h-7" />
      </div>
    </div>
    <div class="mb-4 py-4 flex flex-col items-center">
      <button type="button" onclick="window.location.href = '#';">Get in Touch</button>
    </div>
    <div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
    </div>
  </nav>
  <!-- end btn navbar active -->
</header>

</template>

<script>
export default {
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
// export default {
//   data() {
//     return {
//       header: null,
//     };
//   },
//   async asyncData({ $prismic, error }) {
//     try {
//       const header = (await $prismic.api.getSingle("header")).data;
//       return {
//         header,
//       };
//     } catch (e) {
//       error({ statusCode: 404, message: "Element not found" });
//     }
//   },
// };
</script>