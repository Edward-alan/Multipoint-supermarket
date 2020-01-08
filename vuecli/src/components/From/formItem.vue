<template>
  <div class="form-item" >   <!-- :class="[formLayout]" -->
    <label v-if="title">{{title}}</label>
    <div class="item-cen">
        <input v-if="type" :type="type" v-model="val" :placeholder="placeholder"/>
        <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormItem",
  props: {
    title: {
      type: String,
      default: ""
    },
    type:{
        type:String,
        default:''
    },
    value:{
        type:String,
        default:''
    },
    placeholder:{
       type:String,
        default:''
    }
  },
  components: {},
  data() {
    return {
        val:''
    };
  },
  // inject:['formLayout'],
  watch:{
      val(newValue){
          this.$emit('input',newValue)
      },
      value(newValue){
          this.val = newValue
      }
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    // console.log(this)
  }
};
</script>
<style scoped lang="scss">
.form-item{
    display: flex;
    width: 100%;
    height: 100px;
    line-height: 70px;
    &.inline{
      flex-direction :row;
    }
    &.column{
      display: flex;
    }
    label{
        width: 146px;
        height: 40px;
        text-align:left;
        line-height: 70px;
        margin: 20px 0;
    }
    .item-cen{
        margin:20px 0 0 40px;
        input{
            border:0;
            outline: none;
        }
    }
    .lab{
      float:left;
    }
}
</style>