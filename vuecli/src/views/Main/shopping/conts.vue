<template>
  <div>
    <dl>
      <dt>
        <!-- <img :src="item.img" alt> -->
      </dt>
      <dd>
        <h4></h4>
        <div class="con-box">
          <button @click="left(index)">-</button>
          <span>{{item.num}}</span>
          <button @click="right(index)">+</button>
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    left($index) {
      this.$emit("left", $index);
    },
    right($index) {
      this.$emit("right", $index);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
</style>