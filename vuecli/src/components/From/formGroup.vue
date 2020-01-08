<template>
  <div class="form-group">
    <h2 class="form-group-title">{{title}}</h2>
    <div class="form-group-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormGroup",
  props: {
    title: {
      tyle: String,
      default: ""
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.form-group{
    margin-bottom:20px;
  .form-group-title{
      font-size: 18px;
      color:#000;
  }
}

</style>