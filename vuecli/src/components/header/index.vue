<template>
 <header class="header">
   <slot name="left"></slot>
   <span class="header_title">
     <span class="header_title_text">{{title}}</span>
   </span>
   <slot name="right"></slot>
  </header>
</template>
<script>
export default {
  props: {
    title:String
  },
  components: {},
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

</style>