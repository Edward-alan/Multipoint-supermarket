<template>
  <div class="wrap-bar">
    <div class="bar-header">
      <span class="icons iconfont icon-back" @click="up"></span>
      <div class="dindan">订单确认</div>
    </div>
    <section class="order">
      <nb-form-group title>
        <nb-form :mode="formData" layout="column" ref="form">
          <nb-form-item title="联系人:" type="text" v-model="formData.name" placeholder="请输入联系人"></nb-form-item>
          <nb-form-item title="手机号:" type="number" v-model="formData.fonesnum" placeholder="请输入手机号"></nb-form-item>
          <nb-form-item title="地址:" type="addre" v-model="formData.addre" placeholder="请选择小区,街道,大厦"></nb-form-item>
          <nb-form-item
            title="详细地址:"
            type="address"
            v-model="formData.address"
            placeholder="请输入详细地址"
          ></nb-form-item>
        </nb-form>
      </nb-form-group>

      <Distribution/>
      <!--配送方式-->
      <section class="online">
        <span>在线支付</span>
        <span class="iconfont icon-label_arrow"></span>
      </section>

      <section class="online">
        <span>优惠券/优惠码</span>
        <span class="iconfont icon-label_arrow"></span>
      </section>
      <Price/>
      <!--订单价格-->

      <section class="invoice">
        <span>发票</span>
        <span>
          无需发票
          <i class="iconfont icon-label_arrow"></i>
        </span>
      </section>
    </section>

    <section class="settled">
      <!--foot-->
      <span class="chang">合计:{{numbers}}</span>
      <button @click="account">提交订单</button>
    </section>
  </div>
</template>
<script>
import Price from "../component/price";
import Distribution from "../component/distribution";
export default {
  name: "Caraccount",
  props: {},
  components: {
    Distribution,
    Price
  },
  data() {
    return {
      formData: {
        name: "",
        fonesnum: "",
        addre: "",
        address: "",
        numbers: "",
        Fndata: {}
      }
    };
  },
  computed: {},
  methods: {
    account() {
      if (
        this.formData.name === "" ||
        this.formData.fonesnum === "" ||
        this.formData.address === ""
      ) {
        alert("输入格式不完整,请重新输入");
      } else {
        alert("提交成功");
      }
    },
    up() {
      this.$router.go(-1);
    }
  },
  created() {
    this.numbers = this.$route.query.usernum;
  },
  mounted() {
    this.formData.addre = JSON.parse(sessionStorage.getItem("key"));
    var Fndata = JSON.parse(sessionStorage.getItem("urldata"));
    // let keys = Object.keys(Fndata.data)
    console.log(Fndata.data);
  }
};
</script>
<style scoped lang="scss">
@import url("./scss/style.css");
</style>