<template>
  <div class="wrap-login">
    <header class="head-top">校园超市</header>
    <section class="form-box">
      <nb-form :rules="rules" :mode="formData" layout="column" ref="form">
        <nb-form-group title>
          <nb-form-item title="联系人:" type="text" v-model="formData.name" placeholder="请输入联系人"></nb-form-item>
          <nb-form-item title="手机号:" type="number" v-model="formData.fonesnum" placeholder="请输入手机号"></nb-form-item>
          <nb-form-item title="地址:" type="addre" v-model="formData.addre" placeholder="请选择小区,街道,大厦"></nb-form-item>
          <nb-form-item
            title="详细地址:"
            type="address"
            v-model="formData.address"
            placeholder="请输入详细地址"
          ></nb-form-item>
        </nb-form-group>
      </nb-form>
      <button @click="submit" class="submits">提交</button>
    </section>
  </div>
</template>
<script>
import { Insters } from "@/api/servers";
export default {
  props: {},
  components: {},
  data() {
    return {
      formData: {
        name: "",
        fonesnum: "",
        addre: "",
        address: ""
      },
      rules: {
        fonesnum: [
          { required: true, message: "请输入联系人" },
          { type: "number", message: "请输入数字" }
        ]
      }
    };
  },
  computed: {},
  methods: {
    submit() {
      Insters(
        this.formData.name,
        this.formData.fonesnum,
        this.formData.addre,
        this.formData.address
      ).then(res => {
        if(res.data.code === 1){
           sessionStorage.setItem('urldata', JSON.stringify(res.config));
          this.$router.push('/caraccount')
        }else{
          alert('已注册,请重新输入')
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "./scss/style.css";
</style>