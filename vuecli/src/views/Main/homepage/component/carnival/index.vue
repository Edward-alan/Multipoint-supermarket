<template>
  <div class="carni-box">
    <dl v-for="(item,index) in List" :key="index">
      <dt>
        <img :src="item.userImg" alt>
      </dt>
      <dd>{{item.title}}</dd>
    </dl>
  </div>
</template>
<script>
import { getTit } from "@/api/servers";
import { constants } from "crypto";
export default {
  props: {},
  components: {},
  data() {
    return {
      List: []
    };
  },
  computed: {},
  methods: {
    axi() {
      getTit().then(res => {
        this.List = res.data.results;
      });
    }
  },
  created() {
    this.axi();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.carni-box {
  width: 100%;
  height: 312px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  dl {
    width: 140px;
    height: 140px;
    margin: 5px 0;
    // background: green;
    dt {
      width: 100px;
      height: 90px;
      margin: 7px auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    dd {
      text-align: center;
    }
  }
}
</style>