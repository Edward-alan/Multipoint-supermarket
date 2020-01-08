<template>
  <div class="wrap-box">
      <header class="head-top">校园超市</header>
      <section class="bors-home">
         <router-view/>
      </section>
      <Footer />
  </div>
</template>
<script>
import Footer from '@/components/footer/footer'
export default {
  props: {},
  components: {
    Footer
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "./scss/style.css";
</style>