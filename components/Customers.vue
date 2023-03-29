<template>
  <div>
    <div class="px-6 text-white bg-black-50 pb-16 lg:flex lg:justify-evenly lg:pt-16">
      <div>
        <h1 class="py-10 text-2xl satoshi">What our customers say about us</h1>
        <i class="text-lg interRegular300 tracking-wider leading-8 lg:w-97 lg:block">
          "We love working with SIBO! It is very user friendly, for both us as a
          user and for guests that booking online! The company is always
          improving their systems and are a pleasure to work with!"
        </i>
      </div>
      <!-- carousel -->
      <div class="pt-10 lg:w-1/3">
        <VueSlickCarousel :arrows="true" :dots="true">
          <div
            v-for="(person, index) in persons"
            :key="index"
            class="text-center cursor-pointer"
          >
            <img
              :src="person.image"
              :alt="person.alt"
              class="m-auto rounded-xl w-60"
            />
            <p class="text-xl mt-16 mb-4">{{ person.name }}</p>
            <p class="text-lg text-gray-500 font-bold">
              {{ person.job }} - <i>{{ person.country }}</i>
            </p>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      persons: [
        {
          name: "Sara Shulman",
          job: "Director of Operations",
          image: "/img/people.png",
          alt: "people 1",
          country: "Israel",
        },
        {
          name: "Jane Smith",
          job: "Designer",
          image: "img/people.png",
          alt: "people 2",
          country: "France",
        },
        {
          name: "Jane Smith",
          job: "Designer",
          image: "img/people.png",
          alt: "people 3",
          country: "UK",
        },
        {
          name: "Sara Shulman",
          job: "Director of Operations",
          image: "/img/people.png",
          alt: "people 1",
          country: "Israel",
        },
        {
          name: "Jane Smith",
          job: "Designer",
          image: "img/people.png",
          alt: "people 2",
          country: "France",
        },
        {
          name: "Jane Smith",
          job: "Designer",
          image: "img/people.png",
          alt: "people 3",
          country: "UK",
        },
      ],
    };
  },
};
</script>
<style>
.slick-list {
  padding-bottom: 4rem !important;
}
.slick-dots li {
  margin: -3px;
}
.slick-dots li button:before {
  font-size: 10px;
  color: white;
}
.slick-dots li.slick-active button:before {
  font-size: 10px;
  color: white;
}
</style>