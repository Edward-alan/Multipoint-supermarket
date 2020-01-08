/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-11-11 21:03:44 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-25 20:33:28
    购物车
 */
<template>
  <div class="wrap-car">
    <section class="duodina">
      <dl v-for="(item,ind) in addseles" :key="ind">
        <span>
          <input id="checkAll" type="checkbox" :checked="checked" @click="checkeds(ind)">
        </span>
        <dt>
          <img :src="item.img" alt>
        </dt>
        <dd>
          <p>{{item.title}}</p>
          <span>规格L1.2kg/盒</span>
          <section class="subtract">
            <div class="qian">
              ￥
              <span>{{item.many}}</span>
            </div>
            <div class="butt">
              <button @click="jian(ind)">-</button>
              <span class="num">{{item.num}}</span>
              <button @click="jia(ind)">+</button>
            </div>
          </section>
        </dd>
      </dl>
    </section>
    <Related/>
    <!--猜你喜欢页面-->
    <section class="settled">
      <div class="checkbox" @click="allSelect">
        <input id="checkAll" type="checkbox" @click="changeCheck" :checked="isAllSelected">
      </div>
      <div class="total">
        数量:
        <span>{{totals}}</span>
      </div>
      <button @click="account">
        去结算
        <span>({{numbers}})</span>
      </button>
    </section>
  </div>
</template>
<script>
import conts from "./conts";
import Related from "./component/related/related";
import { constants } from "crypto";
import { addsele, deteil } from "@/api/servers";
export default {
  props: {},
  components: {
    Related,
    conts
  },
  data() {
    return {
      checked: true,
      totals: 0,
      numbers: 0,
      addseles: []
    };
  },
  computed: {
    isAllSelected() {
      return this.addseles.every(el => {
        return el.checked;
        return el;
      });
    }
  },
  methods: {
    jia(ind) {
      //加
      this.addseles[ind].num++;
      this.compute(ind);
    },
    jian(ind) {
      if (this.addseles[ind].num <= 0) {
        deteil(this.addseles[ind].id);
        this.tianadd();
      } else {
        this.addseles[ind].num--;
        this.compute(ind);
      }
    },
    compute(ind) {
      //结算
      let tot = 0; //初始 0
      let sum = 0;
      this.addseles.forEach((item, index) => {
        // console.log(this.addseles[ind].num)
        // tot += this.addseles[ind].num;
        sum += item.num * item.many;
      });
      this.totals = tot;
      this.numbers = Math.round(sum * 100) / 100;
    },
    account() {
      this.$router.push({
        path: "/caraccount",
        query: { usernum: this.numbers }
      });
    },
    changeCheck() {
      this.checked = !this.checked;
    },
    tianadd() {
      addsele().then(res => {
        this.addseles = res.data.results;
        this.compute();
      });
    },
    //全选
    allSelect() {
      let checked = true;
      // 全选
      if (this.isAllSelected) {
        checked = false;
      }
      this.addseles = this.addseles.map(el => {
        el.checked = checked;
        return el;
      });
    },
    checkeds(ind) {
      console.log(ind);
      if (this.checked) {
        checked = false;
      }
    }
  },
  created() {},
  mounted() {
    this.tianadd();
  }
};
</script>
<style scoped lang="scss">
@import "./scss/style.css";
</style>




