<template>
  <ul class="tabBar">
    <li
      v-for="(item,index) in list"
      :key="index"
      :class="{active:activeIndex === index}"
      @click="change(index,item)"
    >{{item.title}}</li>
  </ul>
</template>
<script>
export default {
  name: "TabBar",
  props: {
    List: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      activeIndex: 0
    };
  },
  computed: {},
  methods: {
    change(index, item) {
      this.activeIndex = index;
      this.$emit("change", index, item);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>