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
    <nav
      :class="{ hidden: isActive }"
      class="lg:hidden w-screen absolute top-0 h-screen z-40 bg-white"
    >
      <div class="flex items-center bg-white justify-between p-6">
        <!-- add img with prismic -->
        <!-- <img :src="header.logo_sibo.url" alt="" /> -->
        <img src="../static/img/logodark.png" alt="logo dark Sibo" />
        <!-- btn navbar -->
        <div class="space-y-2" @click="toggle">
          <i class="fa-solid fa-xmark text-black-50 h-7" />
        </div>
      </div>
      <div class="mb-4 py-4 flex flex-col items-center">
        <button
          type="button"
          onclick="window.location.href = '#';"
          class="bg-gold-50 text-black-50 h-14 rounded-xl px-20 py-5 font-bold w-5/6"
        >
          Get in Touch
        </button>
      </div>
      <div class="text-xl flex flex-col gap-3 pl-8">
        <nuxt-link to="#" class="flex items-center gap-2">
          <p>Services</p>
          <i class="fa-solid fa-caret-down"></i>
        </nuxt-link>
        <nuxt-link to="#">
          <p>Pricing</p>
        </nuxt-link>
        <nuxt-link to="#" class="flex items-center gap-2">
          <p>Company</p>
          <i class="fa-solid fa-caret-down"></i>
        </nuxt-link>
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