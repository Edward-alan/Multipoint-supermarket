<template>
  <div class="jilu">
    <ul class="list-box">
      <h3>我的记录</h3>
      <li  >
          <p><span>异常  <span>{{datae}}</span></span></p>
          <p></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      num:0,
      datae:''
    };
  },
  computed: {},
  methods: {

  },
  created() {},
  mounted() {
  //   let data2 = JSON.parse(localStorage.getItem("children"));
  // for(let i in data2){
  //   console.log(data2[i])
  //   // console.log(i === 0 (data2[0].height - data2[0].namegao !=100))
  //   if(i == '0'){
  //     console.log(data2[i].datas)
  //     this.datae = data2[i].datas
  //   }
  // }
  }
};
</script>
<style scoped lang="scss">
.jilu{
  width: 100%;
  height: 295px;
  overflow-y: hidden;
.list-box{
    width: 100%;
    height: 100px;
    margin:30px 0 0;
    background: #ccc;
    position: relative;
    h3{
        width: 32%;
        height: 45px;
        position: absolute;
        background: #36BCDF;
        top:-25px;
        left:3px;
        border-radius: 10px;
        text-align: center;
        line-height: 45px;
    }
    li{
        padding:20px 0 0;
        
    }
}
}

</style>