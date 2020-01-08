/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-11-11 21:07:58 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-15 15:33:31
    登录页
 */
 
<template>
  <div class="register">
    <header class="head-top">校园超市</header>
    <span>手机号登录</span>
    <section class="inp-box">
      <nb-form-item type="text" v-model="Proposing.phone" placeholder="请输入手机号"></nb-form-item>
      <button class="yanzhengma" @click="send_msg">获取验证码</button>
      <nb-form-item type="text" placeholder="请输入验证码" v-model="Proposing.msg_code"></nb-form-item>
    </section>
    <section class="butt">
      <button class="submits" @click="sub">确定</button>
    </section>
  </div>
</template>
<script>
import { logins } from "../../api/servers";
import { loginVerify } from "../../api/servers";
import { constants } from "crypto";
export default {
  props: {},
  components: {},
  data() {
    return {
      Proposing: {
        phone: "",
        msg_code: ""
      }
    };
  },
  computed: {},
  methods: {
    send_msg() {
      logins(this.Proposing.phone).then(res => {
        console.log(res.data.msg);
      });
    },
    sub() {
      loginVerify({ msg: this.Proposing }).then(res => {
        console.log(res.data.msg);
        this.$router.push("/home");
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.register {
  width: 100%;
  height: 100%;
  .head-top {
    width: 100%;
    height: 80px;
    font-size: 36px;
    text-align: center;
    line-height: 80px;
    font-weight: 500;
  }
  span {
    display: inline-block;
    width: 320px;
    height: 90px;
    font-size: 64px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 90px;
    padding: 15px 30px;
  }
  .butt {
    width: 100%;
    height: 200px;
    .submits {
      width: 90%;
      height: 76px;
      outline: none;
      margin: 15px 0 0;
      border: 0;
      margin: 20px 37px;
      background: linear-gradient(
        135deg,
        rgba(253, 88, 48, 1) 0%,
        rgba(254, 71, 35, 1) 100%
      );
      box-shadow: 0px 2px 23px 0px rgba(255, 72, 60, 0.48);
      border-radius: 30px;
    }
  }
  .inp-box {
    width: 100%;
    height: 260px;
    line-height: 260px;
    position: relative;
    .yanzhengma {
      padding: 8px 12px;
      border-radius: 8px;
      outline: none;
      border: 1px solid #ff712b;
      position: absolute;
      top: 25px;
      right: 38px;
      font-size: 14px;
      color: #ff712b;
    }
  }
}
</style>