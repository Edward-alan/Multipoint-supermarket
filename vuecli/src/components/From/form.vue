<template>
  <div>
    <slot/>
  </div>
</template>
<script>
const regs = {
  // phone:/^1[37182]\d{9}$/,
  // email:/[\w!#$%&'*+/=?^_{|} ~-]+(?:.[\w!#$%&'*+/?^_{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w]/,
  // number:/^\d{1,]$}/
};
export default {
  name: "Form",
  props: {
    rules: {
      type: Object,
      default: () => {}
    },
    mode: {
      type: Object,
      default: () => {}
    }
    // layout: {
    //   type: String,
    //   default: "inline"
    // }
  },
  provide() {
    return {
      // formLayout: this.layout
    };
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    verify() {
      return new Promise((resolve, reject) => {
        const mode = this.mode;
        const messageObj = {};
        for (let key in mode) {
          const rules = this.rules[key];
          const value = mode[key];
          const message = this._checkValue(value, rules);
          if (message) {
            messageObj[key] = message;
          }
        }
        if (Object.keys(messageObj).length >= 1) {
          reject(messageObj);
        } else {
          resolve();
        }
      });
    },
    _checkValue(value, rules) {
      let messageContent = "";
      for (let i = 0; i < rules.length; i++) {
        const { required, min, max, type, regexp, message } = rules[i];
        if (
          (required && value.length <= 0) ||
          (min && value.length < min) ||
          (max && value.length > max)
        ) {
          messageContent = message;
          break;
        }
        if (type) {
          const reg = regs[type];
          if (!reg.test(value)) {
            messageContent = message;
            break;
          }
        }
        if (regexp && !regexp.test(value)) {
          messageContent = message;
          break;
        }
      }
      return messageContent;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>