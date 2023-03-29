<template>
  <header class="z-20 sticky top-0">
    <nav
      class="flex items-center bg-olive-50 max-lg:p-6 justify-between lg:justify-around"
    >
      <!-- mettre @mouseover -->
      <div
        @mouseover="toggle"
        @click="toggle"
        class="text-sm lg:flex gap-3 lg:py-8 hidden text-white"
      >
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
      <!-- add img with prismic -->
      <!-- <img :src="header.logo_sibo.url" alt="" /> -->
      <a href="/">
        <img src="../static/img/logo.png" alt="logo Sibo" />
      </a>
      <button
        type="button"
        onclick="window.location.href = '#';"
        class="bg-gold-50 text-black-50 h-12 rounded-xl max-lg:hidden max-[1023]:px-20 hover:bg-black-50 hover:text-white transition interBold text-sm w-36 lg:text-white lg:bg-white lg:bg-opacity-20"
      >
        Get in Touch
      </button>
      <!-- btn navbar desktop active -->
      <!-- mettre mouseleave -->
      <nav
        @mouseleave="toggle"
        @click="toggle"
        :class="{ hidden: isActive }"
        class="max[1023px]:hidden absolute top-0 h-midScreen z-40 bg-white rounded-b-xl"
      >
        <div class="h-littleMidScreen rounded-b-xl shadow-lg">
          <div class="flex items-center max-lg:p-6 justify-around border-b-2">
            <div @click="toggle" class="text-sm flex gap-3 text-black-50">
              <div
                class="py-8 hover:border-b-2 hover:border-b-olive-50 transition hover:transition"
              >
                <nuxt-link to="#" class="flex items-center gap-4">
                  <p>Services</p>
                  <i class="fa-solid fa-caret-down"></i>
                </nuxt-link>
              </div>
              <div
                class="py-8 hover:border-b-2 hover:border-b-olive-50 transition hover:transition"
              >
                <nuxt-link to="#">
                  <p>Pricing</p>
                </nuxt-link>
              </div>
              <div
                class="py-8 hover:border-b-2 hover:border-b-olive-50 transition hover:transition"
              >
                <nuxt-link to="#" class="flex items-center gap-2">
                  <p>Company</p>
                  <i class="fa-solid fa-caret-down"></i>
                </nuxt-link>
              </div>
            </div>
            <!-- add img with prismic -->
            <!-- <img :src="header.logo_sibo.url" alt="" /> -->
            <a href="/">
              <img src="../static/img/logowhite.png" alt="logo Sibo" />
            </a>
            <button
              type="button"
              onclick="window.location.href = '#';"
              class="bg-gold-50 text-black-50 h-12 rounded-xl max-lg:hidden max-[1023]:px-20 hover:bg-black-50 hover:text-white transition interBold text-sm w-36"
            >
              Get in Touch
            </button>
          </div>
          <!-- sous parties -->
          <div class="flex gap-12 px-12 pt-4">
            <!-- card -->
            <div
              v-for="(service, index) in services"
              :key="index"
              class="flex flex-col transition hover:bg-gray-800 hover:bg-opacity-5 rounded-xl p-4"
            >
              <nuxt-link :to="service.link">
                <div class="flex items-center justify-around gap-2">
                  <img :src="service.logo" alt="img" class="rounded-xl w-10" />
                  <p class="satoshi">{{ service.name }}</p>
                  <i class="fa-solid fa-circle-arrow-right"></i>
                </div>
                <div>
                  <p class="text-sm ">{{ service.text }}</p>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </nav>
      <!-- end btn navbar desktop active -->
      <!-- btn navbar -->
      <div class="space-y-2 hover:cursor-pointer lg:hidden" @click="toggle">
        <i class="fa-solid fa-bars text-white h-7"></i>
      </div>
    </nav>
    <!-- btn navbar mobile active -->
    <nav
      :class="{ hidden: isActive }"
      class="lg:hidden w-screen absolute top-0 h-screen z-40 bg-white"
    >
      <div class="flex items-center bg-white justify-between p-6">
        <!-- add img with prismic -->
        <!-- <img :src="header.logo_sibo.url" alt="" /> -->
        <a href="/">
          <img src="../static/img/logodark.png" alt="logo dark Sibo" />
        </a>
        <!-- btn navbar -->
        <div class="space-y-2 hover:cursor-pointer" @click="toggle">
          <i class="fa-solid fa-xmark text-black-50 h-7" />
        </div>
      </div>
      <div class="mb-4 py-4 flex flex-col items-center">
        <button
          type="button"
          onclick="window.location.href = '#';"
          class="bg-gold-50 text-black-50 h-14 rounded-xl px-20 w-5/6 hover:bg-black-50 hover:text-white transition interBold"
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
    <!-- end btn navbar mobile active -->
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
      services: [
        {
          link: "#",
          logo: "/img/logo0.PNG",
          name: "Full property management system",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Ipsam amet sunt deseru, perspiciatis accusamus",
        },
        {
          link: "#",
          logo: "/img/logoBrush.PNG",
          name: "Full property management system",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Ipsam amet sunt deserunt at possimus magni, perspiciatis accusamus",
        },
        {
          link: "#",
          logo: "/img/logo0.PNG",
          name: "Dedicated Support Team & Expert Advice",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Ipsam amet sunt deserunt.",
        },
      ],
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