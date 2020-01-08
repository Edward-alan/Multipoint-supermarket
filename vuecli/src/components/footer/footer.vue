<template>
  <div class="footer">
    <router-link tag="dl" to="/home/homepage">
      <dt>
        <img src="../../assets/1.png" alt>
      </dt>
      <dd>首页</dd>
    </router-link>
    <router-link tag="dl" to="/home/classify">
      <dt>
        <img src="../../assets/2.png" alt>
      </dt>
      <dd>分类</dd>
    </router-link>
    <router-link tag="dl" to="/home/shopping">
      <dt>
        <img src="../../assets/3.png" alt>
      </dt>
      <dd>购物车</dd>
    </router-link>
    <router-link tag="dl" to="/home/my">
      <dt>
        <img src="../../assets/4.png" alt>
      </dt>
      <dd>我的</dd>
    </router-link>
    <div class="indexs">{{number}}</div>
  </div>
</template>
<script>
import { addsele } from "../../api/servers";
export default {
  props: {},
  components: {},
  data() {
    return {
      number: "",
      display: "none"
    };
  },
  computed: {},
  methods: {
    change() {
      addsele().then(res => {
        res.data.results.forEach((item, index) => {
            this.number = index + 1;
        });
      });
    }
  },
  watch: {},
  created() {
    this.change();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.footer {
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  justify-content: space-around;
  dl {
    width: 200px;
    height: 100px;
    // background: pink;
    text-align: center;
    dt {
      width: 52px;
      height: 52px;
      margin: 7px auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .active {
    color: red;
  }
  .indexs {
    width: 40px;
    height: 40px;
    color: #ccc;
    font-size: 30px;
    text-align: center;
    line-height: 40px;
    background: red;
    border-radius: 50%;
    box-shadow: 0 3px 5px rgba(235, 34, 67, 0.5);
    position: absolute;
    top: 0;
    right: 30%;
  }
}
</style>