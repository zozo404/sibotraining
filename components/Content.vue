<template>
  <div class="bg-olive-50 relative -top-px h-43 md:h-98">
    <div class=" px-6 lg:px-24 pt-8 lg:pt-20">
      <div class="text-white flex flex-col lg:flex-row gap-4 pb-8 lg:justify-around lg:pb-0 xl:justify-around">
        <div class="xl:relative xl:right-12">
          <h1 class="font-bold text-4xl leading-10 satoshi lg:w-96 2xl:w-8/12">
            Grow your rental business with us
          </h1>
          <h2 class="text-base lg:pt-4">
            By and for - travel-tech vacation rental companies
          </h2>
        </div>
        <!-- card 1 desktop-->
        <div class="bg-white py-7 px-6 rounded-xl hidden lg:block lg:w-80 lg: relative top-12 z-10 lg:mr-4 ">
          <p class="text-base text-black-50">
            <b> Our platform was designed to innovate operations, </b>
            optimize and automate task management, communications, and resource
            allocation.
          </p>
          <div class="flex justify-center pt-6">
            <button
              type="button"
              onclick="window.location.href = '#';"
              class="bg-gold-50 text-black-50 h-10 rounded-xl w-full hover:bg-black-50 hover:text-white transition interBold"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      <!-- all card -->
      <div class="flex flex-col flex-wrap lg:flex-nowrap md:flex-row md:justify-center gap-8 lg:relative lg:bottom-8 items-center 3xl:gap-16">
        <!-- card 1 mobile-->
        <div class="bg-white py-7 px-6 rounded-xl lg:hidden md:w-1/2">
          <p class="text-xl">
            <b> Our platform was designed to innovate operations, </b>
            optimize and automate task management, communications, and resource
            allocation.
          </p>
          <div class="flex justify-center pt-6">
            <button
              type="button"
              onclick="window.location.href = '#';"
              class="bg-gold-50 text-black-50 h-10 rounded-xl w-full hover:bg-black-50 hover:text-white transition interBold"
            >
              Get in Touch
            </button>
          </div>
        </div>
        <!-- card 2 -->
        <img src="../static/img/desk.jpg" alt="desk" class="rounded-xl h-64 md:w-custom lg:w-97 xl:w-xl lg:h-97 xl:h-xl 2xl:w-99 2xl:h-42" />
        <!-- card 3 -->
        <img
          src="../static/img/couple.jpg"
          alt="desk"
          class="rounded-xl h-64 hidden md:block md:w-custom lg:w-97 lg:h-97 xl:w-xl xl:h-xl 2xl:w-99 2xl:h-42"
        />
      </div>
    </div>
    <div class="flex flex-col gap-8 pt-8 bg-white md:hidden">
      <div class="px-6">
        <!-- card 3 -->
        <img
          src="../static/img/couple.webp"
          alt="desk"
          class="rounded-xl h-64 my-0 mx-auto"
        />
      </div>
    </div>
  </div>
</template>