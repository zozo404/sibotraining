<template>
  <div class="pt-5">
    <div class="lg:flex lg:justify-center xl:justify-evenly lg:gap-8 lg:px-12">
      <!-- div services -->
      <div class="px-6">
        <h2 class="text-2xl lg:text-lg py-5 font-bold">Services</h2>
        <div class="flex flex-col gap-3 pb-5 lg:text-sm">
          <a href="#">
            <p>Full PMS</p>
          </a>
          <a href="#">
            <p>White label branding</p>
          </a>
          <a href="#">
            <p>Dedicated support team</p>
          </a>
        </div>
      </div>
      <hr class="my-4 border border-gray-300 lg:hidden" />

      <!-- div features -->
      <div class="px-6">
        <h2 class="text-2xl lg:text-lg py-5 font-bold">Features</h2>
        <div class="flex flex-col gap-3 lg:gap-12 pb-5 lg:text-sm lg:flex-row">
          <div class="gap-3 flex flex-col">
            <a href="#">
              <p>Channel Management</p>
            </a>
            <a href="#">
              <p>Customised Website & Mobile App</p>
            </a>
            <a href="#">
              <p>Payement processing, Paylinks & Deposits</p>
            </a>
            <a href="#">
              <p>Multi calendar</p>
            </a>
            <a href="#">
              <p>Pricing tool</p>
            </a>
            <a href="#">
              <p>Owner Portal</p>
            </a>
          </div>
          <!--  -->
          <div class="gap-3 flex flex-col">
            <a href="#">
              <p>Online Check-in</p>
            </a>
            <a href="#">
              <p>Journey</p>
            </a>
            <a href="#">
              <p>Unified Inbox</p>
            </a>
            <a href="#">
              <p>Customisable Analytics</p>
            </a>
            <a href="#">
              <p>NPS and InStay reviews</p>
            </a>
          </div>
        </div>
      </div>
      <hr class="my-4 border border-gray-300 lg:hidden" />

      <!-- div company -->
      <div class="px-6">
        <h2 class="text-2xl lg:text-lg py-5 font-bold">Company</h2>
        <div class="flex flex-col gap-3 pb-5 lg:text-sm">
          <a href="#">
            <p>Abouts us</p>
          </a>
          <a href="#">
            <p>Careers</p>
          </a>
          <a href="#">
            <p>Blog</p>
          </a>
        </div>
      </div>
      <hr class="my-4 border border-gray-300 lg:hidden" />

      <!-- div contact -->
      <div class="px-6">
        <h2 class="text-2xl lg:text-lg py-5 font-bold">
          <a href="#">Contact</a>
        </h2>
        <div class="hidden lg:flex lg:flex-col gap-2">
          <button
            type="button"
            onclick="window.location.href = '#';"
            class="bg-gold-50 text-black-50 h-12 rounded-xl max-[1023px]:px-20 hover:bg-black-50 hover:text-white transition interBold text-sm w-36"
          >
            Get in touch
          </button>
          <button
            type="button"
            onclick="window.location.href = '#';"
            class="bg-black-50 text-white h-12 rounded-xl max-[1023px]:px-20 hover:text-black-50 hover:bg-gold-50 transition interBold text-sm w-36 lg:text-white"
          >
            Get a quote
          </button>
        </div>
      </div>
      <hr class="my-4 border border-gray-300 lg:hidden" />

      <!-- div linkdIn -->
      <div class="px-6 lg:hidden">
        <h2 class="text-xl py-5 text-center">
          Join us on social media
          <a href="#"><i class="fa-brands fa-linkedin-in pl-2"></i></a>
        </h2>
      </div>
      <hr class="my-4 border border-gray-300 lg:hidden" />
    </div>

    <hr class="hidden lg:block lg:border-gray-300 my-0 mx-auto w-4/5">
    <div class="lg:flex lg:flex-row-reverse lg:justify-end lg:py-8 lg:items-end">
      <!-- div &copy; copyright / Bruno -->
      <div class="lg:flex-grow flex flex-col lg:flex-row items-center gap-4 lg:items-baseline">
        <div class="flex gap-3 pb-5 text-xs justify-center">
          <a href="#">
            <p>&copy;2023 SIBO. ALL rights Reserved</p>
          </a>
          <a href="#">
            <p>Legal Mentions</p>
          </a>
        </div>
        <p class="text-center text-sm lg:text-xs">
          Mabe By
          <a
            href="https://www.callbruno.com/fr/culture"
            class="underline underline-offset-4"
            >Bruno
          </a>
        </p>
      </div>
      <hr class="my-4 border border-gray-300 lg:hidden" />

      <!-- div logo -->
      <div class="flex-grow">
        <a href="/">
          <img
            src="../static/img/logowhite.png"
            alt="logo"
            class="mt-0 mx-auto"
          />
        </a>
      </div>
    </div>
  </div>
</template>