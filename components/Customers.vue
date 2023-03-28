<template>
  <div class="px-6 text-white bg-black-50 pb-16">
    <h1 class="py-10 text-4xl">What our customers say about us</h1>
    <i class="text-xl">
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eos hic,
      consectetur dolore accusantium delectus sunt commodi temporibus suscipit.
      Molestiae soluta aspernatur ullam! Voluptatum consequuntur nostrum modi in
      iste repellendus?"
    </i>
    <!-- carousel -->
    <div class="pt-10">
      <VueSlickCarousel :arrows="false" :dots="true">
        <div
          v-for="(person, index) in persons"
          :key="index"
          class="text-center cursor-pointer"
        >
          <img
            :src="person.image"
            :alt="person.alt"
            class="m-auto rounded-xl w-48"
          />
          <p class="text-xl my-4">{{ person.name }}</p>
          <p class="text-lg text-gray-500 font-bold">
            {{ person.job }} - <i>{{ person.country }}</i>
          </p>
        </div>
      </VueSlickCarousel>
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
      ],
    };
  },
};
</script>
<style>
.slick-list{
  padding-bottom: 4rem!important;
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