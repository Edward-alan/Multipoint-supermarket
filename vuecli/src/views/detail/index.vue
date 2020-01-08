/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-11-22 20:07:57 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-25 19:48:09
   详情页
 */
<template>
  <div class="wrap-details">
    <header class="head">
      <i class="icon iconfont icon-back" @click="back"></i>
    </header>
    <div class="centers">
      <section class="banners">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img :src="detailadd.cover" alt>
            </div>
            
          </div>
        </div>
      </section>
      <section class="titles">
        <h3>[牛奶]</h3>
        <p>德国上平</p>
        <div>
          <span>￥{{detailadd.price}}</span>
          <span>已售{{detailadd.count}}件</span>
        </div>
      </section>

      <section class="germany">
        <ul>
          <li>
            <p>德国</p>
            <p>产地</p>
          </li>
          <li>
            <p>1L</p>
            <p>规格</p>
          </li>
          <li>
            <p>常温</p>
            <p>存储方式</p>
          </li>
        </ul>
      </section>

      <div class="promotion-default">每满79减20元 . 最高优惠60元</div>

      <section class="bann">
        <img src="https://img.dmallcdn.com//20180408/38fb0f09-bd05-4302-9519-331d4dcf7752_m640" alt>
      </section>
    </div>

    <footer class="foot">
      <span></span>
      <div class="cars" @click="caranes(detailadd)">加入购物车</div>
    </footer>
  </div>
</template>
<script>
import { Carmenus } from "@/api/servers";
import Swiper from "swiper/js/swiper.min.js";
export default {
  name: "Details",
  props: {},
  components: {},
  data() {
    return {
      detailadd: "",
      num:1
    };
  },
  computed: {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    swipers() {
      var swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: true
      });
    },
    caranes(detailadd){
      console.log(detailadd)
      Carmenus(detailadd.name, detailadd.price, detailadd.cover, this.num);
    }
  },
  created() {
   
  },
  mounted() {
    this.$nextTick(() => {
      this.swipers();
    });
     this.detailadd = this.$route.query.item;
  }
};
</script>
<style scoped lang="scss">
@import url("./scss/style.css");
</style>