/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-11-11 21:04:09 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-27 10:37:24
    我的
 */
<template>
  <div class="wrap-my">
    <section class="petname">
      <dl>
        <dt>
          <p class="names">我的昵称</p>
          <span class="datas">开启美好的一天</span>
        </dt>
        <dd>
          <div class="image">
            <img src="http://img1.imgtn.bdimg.com/it/u=1942817575,950025996&fm=26&gp=0.jpg" alt>
          </div>
        </dd>
      </dl>
    </section>
    <section class="indent">
      <div class="examine">
        <span>我的订单</span>
        <span>查看全部 ></span>
      </div>
      <section class="payment">
        <dl>
          <dt class="iconfont icon-web-icon-"></dt>
          <dd>代支付</dd>
        </dl>
        <dl>
          <dt class="iconfont icon-daifahuo"></dt>
          <dd>代发货</dd>
        </dl>
        <dl>
          <dt class="iconfont icon-yifahuo"></dt>
          <dd>已发货</dd>
        </dl>
      </section>
    </section>
    <div class="discount">
      <span>我的资产</span>
      <section class="yue">
        <dl>
          <dt>
            <p>￥0.00</p>
          </dt>
          <dd>
            <p>余额</p>
          </dd>
        </dl>
        <dl>
          <dt>
            <p>￥0.00</p>
          </dt>
          <dd>
            <p>余额</p>
          </dd>
        </dl>
        <dl>
          <dt>
            <p>￥0.00</p>
          </dt>
          <dd>
            <p>余额</p>
          </dd>
        </dl>
      </section>
    </div>
    <div class="serve">
      <span>我的服务</span>
      <section class="fuwuq">
        <dl>
          <dt>
            <p></p>
          </dt>
          <dd>
            <p>会员中心</p>
            <font>会员有好礼</font>
          </dd>
        </dl>
        <dl>
          <dt>
            <p></p>
          </dt>
          <dd>
            <p>收货地址</p>
          </dd>
        </dl>
        <dl>
          <dt>
            <p></p>
          </dt>
          <dd>
            <p>客服电话</p>
          </dd>
        </dl>
      </section>
    </div>
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
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "./scss/style.css";
</style>