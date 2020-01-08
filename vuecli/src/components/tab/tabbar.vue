<template>
  <div class="footer-bar">
    <nav class="tab-box">
      <span @click="change(0)">成长记录</span>
      <!-- <router-like tag="span" to="/detail">+</router-like> -->
      <router-link class="span-jia" tag="span" to="/baofayu">+</router-link>
      <span @click="change(1)">生长曲线</span>
    </nav>
  </div>
</template>
<script>
export default {
  name: "TabBar",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    change(index) {
      this.$emit("change", index);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.footer-bar {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  .tab-box {
    width: 100%;
    height: 50px;
    display: flex;
    line-height: 50px;
    justify-content: space-between;
    span {
      padding: 0 10px;
    }
    .span-jia{
      width: 40px;
      height: 45px;
      // font-size: 20px;
      border-radius: 50%;
      text-align: center;
      line-height: 45px;
      background: #FC9FB1;
    }
  }
}
</style>