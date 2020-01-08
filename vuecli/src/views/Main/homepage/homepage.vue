/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-11-11 21:02:05 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-26 20:26:56
    主页
 */
<template>
  <div class="homepage">
    <section class="search">
      <div class="site" @click="dizhi">{{count}}</div>
      <div class="seek" @click="search">搜索</div>
    </section>
    <section class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
            <img :src="item.image">
          </div>
        </div>
      </div>
    </section>
    <Carnival/>
    <section class="shop-day">
      <div class="bigou">
        <h1>每日必购</h1>
        <span>大家都在买</span>
      </div>
      <ul>
        <li>
          <a
            class="J_ClickTrace J_Link"
            data-traceevent="https://a.dmall.com/act/i8HtDkXKzcpgJT.html?erpStoreId=206&amp;dmfrom=wx&amp;from=wx&amp;shareKey=1573543114605"
            href="https://a.dmall.com/act/i8HtDkXKzcpgJT.html?erpStoreId=206&amp;dmfrom=wx&amp;from=wx&amp;shareKey=1573543114605"
          >
            <img
              class="J_ItemImage lazyloaded"
              data-src="https://img.dmallcdn.com/mIndex/201905/a298f1a2-64bb-4280-aded-56170ae4d9e5_360x360H"
              src="https://img.dmallcdn.com/mIndex/201905/a298f1a2-64bb-4280-aded-56170ae4d9e5_360x360H"
            >
          </a>
        </li>
        <li>
          <a
            class="J_ClickTrace J_Link"
            data-traceevent="https://a.dmall.com/act/eg83yJzumh.html?erpStoreId=206&amp;dmfrom=wx&amp;from=wx&amp;shareKey=1573543114605"
            href="https://a.dmall.com/act/eg83yJzumh.html?erpStoreId=206&amp;dmfrom=wx&amp;from=wx&amp;shareKey=1573543114605"
          >
            <img
              class="J_ItemImage lazyloaded"
              data-src="https://img.dmallcdn.com/mIndex/201905/16026d16-6314-4665-92b4-698726ff9c90_360x360H"
              src="https://img.dmallcdn.com/mIndex/201905/16026d16-6314-4665-92b4-698726ff9c90_360x360H"
            >
          </a>
        </li>
        <li>
          <a
            class="J_ClickTrace J_Link"
            data-traceevent="https://a.dmall.com/act/i8HtDkXKzcpgJT.html?erpStoreId=206&amp;dmfrom=wx&amp;from=wx&amp;shareKey=1573543114605"
            href="https://a.dmall.com/act/i8HtDkXKzcpgJT.html?erpStoreId=206&amp;dmfrom=wx&amp;from=wx&amp;shareKey=1573543114605"
          >
            <img
              class="J_ItemImage lazyloaded"
              data-src="https://img.dmallcdn.com/mIndex/201905/a298f1a2-64bb-4280-aded-56170ae4d9e5_360x360H"
              src="https://img.dmallcdn.com/mIndex/201905/a298f1a2-64bb-4280-aded-56170ae4d9e5_360x360H"
            >
          </a>
        </li>
      </ul>
    </section>
    <section class="everyday">
      <!-- 吸顶 -->
      <ul  id="boxFixed" :class="{'is_fixed' : isFixed}" class="box_fixed">
        <li
          :class="{'active':active === index}"
          @click="fnbtn(index)"
          v-for="(item,index) in dataLeft"
          :key="index"
        >{{item.title}}</li>
      </ul>
      <!-- <nb-tabBar :ind='tabInd' :list="tabList" @changeTabInd="changeTabInd"></nb-tabBar> -->

      <!-- 上拉加载下拉刷新 -->
      <Scroll
        ref="wrapper"
        :listenScroll="true"
        :pullup="true"
        :data="tabList"
        @scrollToEnd="scrollToEnd"
        @setScroll="setScroll"
        @beforeScroll="beforeScroll"
        @scroll="scroll"
      >
        <section class="addlistadd" v-for="(item,ind) in tabList" :key="ind">
          <dl>
            <router-link tag="dt" :to="{path:'/detail',query:{id:item.id,item}}">
              <img :src="item.cover" alt>
            </router-link>
            <dd>
              <p class="title">{{item.name}}}</p>
              <p>累积{{item.count}}万份 / 已评13份</p>
              <p class="price">
                <span>￥{{item.price}}</span>
                <span @click="carane(ind)">购物车</span>
              </p>
            </dd>
          </dl>
        </section>
      </Scroll>
    </section>
  </div>
</template>
<script>
import Scroll from "@/components/scroll";
import { getListzuo, getaddList, banner, Carmenus } from "@/api/servers";
import Swiper from "swiper/js/swiper.min.js";
import Carnival from "../homepage/component/carnival";
import { constants, createHash } from "crypto";
export default {
  props: {},
  components: {
    Carnival,
    Scroll
  },
  data() {
    return {
      banners: [],
      count: "",
      dataLeft: "",
      active: 0,
      typeId: 0,
      page: 0,
      pageSize: 10,
      tabList: [],
      num: 1,
      isFixed: false, //吸顶开关
      offsetTop: 0,
    };
  },
  computed: {},
  methods: {
    swipers() {
      var swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: true,
        observer: true //改变子元素时自动初始化swiper页面
      });
    },
    axi() {
      banner().then(res => {
        this.banners = res.data.results;
        this.$nextTick(() => {
          this.swipers();
        });
      });
    },
    dizhi() {
      this.$router.push("/orientation");
    },
    search() {
      this.$router.push("/seekseek");
    },
    dataList() {
      getListzuo().then(res => {
        this.dataLeft = res.data.results;
      });
    },
    fnbtn(index) {
      this.active = index;
      getaddList(this.page, this.pageSize, index).then(res => {
        this.tabList = res.data.results;
      });
    },
    async getadd() {
      getaddList(this.page, this.pageSize, this.typeId).then(res => {
        this.tabList = res.data.results;
      });
    },
    // changeTabInd(){
    //   console.log(123)
    // }

    scrollToEnd(scroll) {
      console.log(scroll);
      this.scroll = scroll;
      console.log("下拉到最底下");
    },
    setScroll(scroll) {
      this.scroll = scroll;
      console.log("scroll创建成功");
    },
    scroll(pos) {
      console.log(pos); //监听滚动坐标
    },
    beforeScroll() {
      console.log("滚动之前");
    },
    carane(ind) {
      this.tabList.forEach((item, index) => {
        if (index === ind) {
          Carmenus(item.name, item.price, item.cover, this.num);
        }
      });
    },

    initHeight() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      this.isFixed = scrollTop > this.offsetTop ? true : false;
      console.log(this.offsetTop)
      if (scrollTop > offsetTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    }
   
  },
  created() {
    this.axi();
    this.dataList();
    this.getadd();
  },
  mounted() {
    var all = JSON.parse(sessionStorage.getItem("key"));
    this.count = all;

    //吸顶
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      this.offsetTop = document.querySelector("#boxFixed").offsetTop;
    });
  }
};
</script>
<style scoped lang="scss">
@import "./scss/style.css";
.price {
  height: 50px;
  display: flex;
  line-height: 50px;
  justify-content: space-between;
}

.box_fixed {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
  background: #eee;
}
.is_fixed {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>