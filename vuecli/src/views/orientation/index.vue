/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-11-14 21:17:50 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-15 20:50:30
    定位页
 */
<template>
  <div style="position:relative" class="wraps-bosx">
    <header class="headers">校园超市</header>
    <orientation/>
    <Popout/>
  </div>
</template>
<script>
import Orientation from "./component/orientation";
import Popout from './component/popout'
export default {
  name: "hello",
  components: {
    Orientation,
    Popout
    },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.wraps-bosx {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .headers {
    width: 100%;
    height: 80px;
    font-size: 36px;
    text-align: center;
    line-height: 80px;
    font-weight: 500;
  }
  .GetCode-boxs {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    .GetCode-inp {
      flex: 1;
      input {
        width: 300px;
        margin: 10px 50px;
      }
    }
  }
  span {
    color: #feb101;
  }
  button {
    background: #feb101;
    color: #fff;
    height: 60px;
    width: 130px;
    border: none;
    border-radius: 5px;
    outline: none;
  }
  button:active {
    opacity: 0.8;
  }
  .foot {
    width: 100%;
    height: 100px;
    font-size: 40px;
    border-top: 1px solid #ccc;
    text-align: center;
    line-height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>

