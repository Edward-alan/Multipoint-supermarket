/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-11-12 16:27:51 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-27 09:39:39
    分类
 */
<template>
  <div class="weap-box">
    <!-- <section class="sousuo">
      <input type="text" placeholder="搜索校园超市商品">
    </section>-->
    <section class="rectan">
      <div class="left">
        <ul>
          <li
            :class="{'active':active === index}"
            @click="fnbanner(index)"
            v-for="(item,index) in leftList"
            :key="index"
          >{{item.title}}</li>
        </ul>
      </div>
      <div class="right">
        <section class="right-top">
          <div class="entire">
            <span
              :class="{'active':navs === index}"
              @click="jinping(index)"
              v-for="(item,index) in topinformation"
              :key="index"
            >{{item.title}}</span>
          </div>
          <div class="loudou" @click="ascending">升序</div>
          <div class="loudou" @click="descending">降序</div>
        </section>
        <section class="categ">
          <dl v-for="(item,index) in classifys" :key="index">
            <dt>
              <img :src="item.cover" alt>
            </dt>
            <dd>
              <p class="name">{{item.name}}</p>
              <p class="name">库存剩:{{item.count}}</p>
              <div class="addane">
                <span>￥{{item.price}}</span>
                <span class="addjia" @click="addser">+</span>
              </div>
            </dd>
          </dl>
        </section>
      </div>
    </section>
  </div>
</template>
<script>
import { getListbai, campus, carList } from "@/api/servers";
import { constants } from "crypto";
export default {
  naem: "Classify",
  props: {},
  components: {},
  data() {
    return {
      leftList: "",
      topinformation: "",
      active: 0,
      navs: 0,
      classifys: []
    };
  },
  computed: {},
  methods: {
    addser() {
      console.log(123);
    },
    zuoList() {
      getListbai().then(res => {
        this.leftList = res.data.results;
      });
    },
    fnbanner(index) {
      this.active = index;
      campus(index + 1).then(res => {
        this.topinformation = res.data.results;
      });
    },
    jinping(index) {
      this.navs = index;
      carList().then(res => {
        this.classifys = res.data.results;
      });
    },
    ascending() {
      return this.classifys.sort((a, b) => a.price - b.price);
    },
    descending() {
      return this.classifys.sort((a, b) => a.price - b.price).reverse();
    }
  },
  created() {
    this.zuoList();
  },
  mounted() {
    campus(1).then(res => {
      this.topinformation = res.data.results;
    });
    this.jinping();
  }
};
</script>
<style scoped lang="scss">
@import "./scss/style.css";
</style>