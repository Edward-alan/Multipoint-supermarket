<template>
  <div>
    <section class="addlistadd" v-for="(item,index) in tabList" :key="index">
      <dl>
        <dt>
          <img :src="item.cover" alt>
        </dt>
        <dd>
          <p class="title">{{item.name}}}</p>
          <p>累积{{item.count}}万份 / 已评13份</p>
          <p>
            ￥91.5
            <span>购物车</span>
          </p>
        </dd>
      </dl>
    </section>
  </div>
</template>

<script>
import { getaddList } from "@/api/servers";
import { getListzuo } from "@/api/servers";
export default {
  name: "Addlistadd",
  props: [],
  data() {
    return {
      typeId: 0,
      page: 0,
      pageSize: 10,
      tabList: []
    };
  },
  methods: {
    addind() {
      getaddList(this.page, this.pageSize, index).then(res => {
        this.tabList = res.data.results;
      });
    },
    async getadd() {
      getaddList(this.page, this.pageSize, this.typeId).then(res => {
        this.tabList = res.data.results;
      });
    }
  },
  created() {
    this.getadd();
  },
  mounted() {
      console.log(this.props)
  }
};
</script>
<style scoped  lang="">
</style>