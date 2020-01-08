<template>
     <div class="quanxian">
       <section class="cavase">
          <canvas id="myChart" width="376" height="206"></canvas>
       </section>
         <span class="detail" @click="details">查看详情</span>
     </div>
</template>
<script>
import F2 from '@antv/f2'
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    details(){
      this.$router.push('/detail')
    },
     
  },
  created() {},
  mounted() {
    const data = [
      { genre: "Sports", sold: 275 },
      { genre: "Strategy", sold: 115 },
      { genre: "Action", sold: 120 },
      { genre: "Shooter", sold: 350 },
      { genre: "Other", sold: 150 }
    ];
    const chart = new F2.Chart({
      id: "myChart",
      pixelRatio: window.devicePixelRatio // 指定分辨率
    });

    // Step 2: 载入数据源
    chart.source(data);

    // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart
      .interval()
      .position("genre*sold")
      .color("genre");

    // Step 4: 渲染图表
    chart.render();
  }
};
</script>
<style scoped lang="scss">
.quanxian{
    width: 100%;
    height: 275px;
    position: relative;
    background: rgb(231, 231, 231);
    .cavase{
      width: 100%;
      height: 200px;
    }
    .detail{
      display: inline-block;
      width: 100px;
      height: 30px;
      border:1px solid #FEA4B6;
      text-align: center;
      line-height: 30px;
      border-radius: 20px;
      color: #FEA4B6;
      position: absolute;
      bottom:0;
      right:0;
    }
}

</style>