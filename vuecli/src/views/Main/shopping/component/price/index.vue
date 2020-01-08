/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-11-22 14:58:21 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-22 19:04:27
    订单价格
 */
<template>
  <div class="price-wrap">
    <ul>
      <h5>订单价格</h5>
      <li class="jine">
        <p>
          <span>商品金额</span>
          <span>￥{{numbers}}</span>
        </p>
        <p>
          <span>促销优惠</span>
          <span>- ￥0.00</span>
        </p>
      </li>
      <li class="zhifu">
        <span>实际支付</span>
        <span>￥{{numbers}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Price",
  data() {
    return {
      numbers:''
    };
  },
  created() {
    this.numbers = this.$route.query.usernum;
  }
};
</script>
<style scoped  lang="scss">
.price-wrap {
  width: 100%;
  height: 300px;
  background: #fff;
  ul {
    width: 100%;
    height: 300px;
    h5 {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
    }
    .jine {
      height: 150px;
      border-bottom: 1px solid #ccc;
      p {
        width: 100%;
        height: 75px;
        line-height: 75px;
        display: flex;
        justify-content: space-between;
        span {
          padding: 0 45px;
        }
      }
    }
    .zhifu {
      height: 90px;
      line-height: 90px;
      display: flex;
      justify-content: space-between;
      span {
        padding: 0 45px;
      }
    }
  }
}
</style>