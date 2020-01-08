<template>
  <div class="search">
    <div class="inp">
      <i class="icons iconfont icon-back" @click="up"></i>
      <span class="icon iconfont icon-chazhao"></span>
      <input type="text" placeholder="搜索想要的商品" v-model="souyosou">
      <button @click="sousuoyixia" class="iconfont icon-chazhao">搜索</button>
    </div>
    <section class="shousuo">
      <dl v-for="(item,index) in getdata" :key="index">
        <router-link tag="dt" :to="{path:'/detail',query:{id:item.id,item}}">
          <div class="bann">
            <img :src="item.cover" alt>
          </div>
        </router-link>
        <dd>
          <h4 v-html="item.name" ></h4>
          <p>规格L1.2kg/盒</p>
          <p>已售{{item.count}}</p>
            <div class="qian">
              ￥
              <span>{{item.price}}</span>
            </div>
        </dd>
      </dl>
    </section>
  </div>
</template>
<script>
import { sousuos } from "@/api/servers";
export default {
  name: "Seekseek",
  props: {},
  components: {},
  data() {
    return {
      souyosou: "",
      getdata: "",
      results: ""
    };
  },
  computed: {},
  methods: {
    up() {
      this.$router.go(-1);
    },
    sousuoyixia() {
      sousuos(this.souyosou).then(res => {
        //  this.getdata = res.data.data;
        this.changeColor(res.data.data);
      });
    },
    
    changeColor(resultsList) {
      resultsList.map((item, index) => {
        if (this.souyosou && this.souyosou.length > 0) {
          // 匹配关键字正则
          let replaceReg = new RegExp(this.souyosou, "g");
          // 高亮替换v-html值
          let replaceString =
            '<span class="searchtext" style="color:red">' + this.souyosou + "</span>";
          resultsList[index].name = item.name.replace(
            replaceReg,
            replaceString
          );
        }
      });
      this.getdata = resultsList;
    },
   
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.search {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  .inp {
    width: 100%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-radius: 30px;
    position: relative;
    .icons {
      width: 6%;
      height: 70px;
      line-height: 70px;
      text-align: center;
    }
    .icon {
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 30px;
      text-align: center;
      position: absolute;
      top: 10px;
      left: 70px;
    }
    input {
      width: 70%;
      height: 70px;
      outline: none;
      border: 0;
      border-radius: 30px;
      padding: 0 0 0 67px;
    }
    button {
      width: 12%;
      outline: none;
      font-size: 10px;
      border-radius: 10px;
      color: #fff;
      border: 0;
      background: orange;
    }
  }
  .shousuo {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background: rgb(241, 241, 241);
    dl {
      width: 100%;
      height: 280px;
      display: flex;
      float: left;
      margin: 20px 0 20px;
      background: #fff;
      justify-content: space-between;
      dt,
      dd {
        width: 50%;
      }
      dt {
        .bann {
          width: 90%;
          height: 100%;
          margin: 0 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      dd {
        h4{
          margin: 25px 0 0;
          font-size: 30px;
        }
        p {
          margin: 20px 0 0;
        }
        .qian {
          margin: 20px 0 0;
        }
      }
    }
    .ansy{
      height: 100px;
      background: #ccc;
    }
  }
}
</style>