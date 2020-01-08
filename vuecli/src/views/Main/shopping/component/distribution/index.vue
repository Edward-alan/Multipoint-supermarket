/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-11-22 14:58:42 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-22 19:36:20
    配送方式
 */
<template>
  <div class="distribution-wrap">
    <ul>
      <li>
        <span>配送方式</span>
        <span class="iconfont icon-label_arrow"></span>
      </li>
      <li>
        <span>配送时间</span>
        <span class="iconfont icon-label_arrow"></span>
      </li>
      <li>
        <span>立即送出,大约12.00前送达</span>
        <span class="iconfont icon-label_arrow"></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Distribution",
  props: {},
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
.distribution-wrap {
  width: 100%;
  height: 260px;
  background: #fff;
  ul {
    width: 100%;
    height: 260px;
    li {
      height: 85px;
      line-height: 85px;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      span{
        padding: 0 35px;
      }
    }
  }
}
</style>