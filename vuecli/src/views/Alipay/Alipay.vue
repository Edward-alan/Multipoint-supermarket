<template>
  <div class="selfpwddiv">
    <p>请输入支付密码</p>
    <div class="am_payPwd" :id="`ids_${id}`">
      <a-input
        type="password"
        maxlength="1"
        @input="changeInput"
        @click="changePwd"
        v-model="pwdList[i]"
        @keyup="keyUp($event)"
        @keydown="oldPwdList = pwdList.length"
        class="shortInput"
        v-for="(v, i) in 6"
        :key="i"
      ></a-input>
    </div>
  </div>
</template>
<script>
export default {
    name:'Alipay',
  data() {
    return {
      pwdList: [],
      oldPwdList: [],
      isDelete: false,
      ipt: ""
    };
  },
  props: {
    id: String, // 当一个页面有多个密码输入框时，用id来区分
    defaults: "1"
  },
  mounted() {
    this.init();
    this.ipt = document.querySelectorAll(`#ids_${this.id} .shortInput`);
  },
  methods: {
    init() {
      this.pwdList = [];
      this.oldPwdList = [];
      this.isDelete = false;
      this.ipt = "";
    },
    keyUp(ev) {
      let index = this.pwdList.length;
      if (!index) return;
      if (ev.keyCode === 8) {
        this.isDelete = true;
        if (this.oldPwdList === this.pwdList.length) {
          if (index === this.pwdList.length) {
            this.pwdList.pop();
          }
          index--;
        } else {
          index > 0 && index--;
        }
        this.ipt[index].focus();
      } else if (
        this.isDelete &&
        index === this.pwdList.length &&
        /^\d$/.test(ev.key)
      ) {
        this.isDelete = false;
        this.pwdList.pop();
        this.pwdList.push(ev.key);
        this.ipt[this.pwdList.length] && this.ipt[this.pwdList.length].focus();
      }
      this.$emit("getPwd", this.pwdList.join(""));
    },
    changePwd() {
      let index = this.pwdList.length;
      index === 6 && index--;
      this.ipt[index].focus();
    },
    changeInput() {
      let index = this.pwdList.length;
      let val = this.pwdList[index - 1];
      if (!/[0-9]/.test(val)) {
        this.pwdList.pop();
        return;
      }
      if (!val) {
        this.pwdList.pop();
        index--;
        if (index > 0) this.ipt[index - 1].focus();
      } else {
        if (index < 6) this.ipt[index].focus();
      }
    }
  }
};
</script>
<style lang="scss" >
.selfpwddiv {
  text-align: center;
  p {
    font-size: 16px;
    color: black;
    margin-bottom: 20px;
  }
  .am_payPwd {
    display: inline-block;
    border-radius: 5px;
    padding: 10px 0;
    position: relative;
    overflow: hidden;
    margin-left: 1px;
    .shortInput {
      text-align: center;
      font-size: 20px;
      float: left;
      width: 40px;
      height: 30px;
      color: #333;
      outline: #ff0067;
      &:not(:last-child) {
        border-right: 1px solid #999;
      }
    }
  }
}
</style>