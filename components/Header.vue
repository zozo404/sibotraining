<template>
  <div>
    <PrismicImage :field="logo_sibo" />
    <div class="space-y-2">
      <div class="w-8 h-0.5 bg-gray-600"></div>
      <div class="w-8 h-0.5 bg-gray-600"></div>
      <div class="w-8 h-0.5 bg-gray-600"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo_sibo: null,
    };
  },
  async asyncData({ $prismic }) {
    const response = await $prismic.api.getByUID('Logo Sibo', 'logo_sibo')
    return { logo_sibo: response.data.logo_sibo }
  },
};
</script>