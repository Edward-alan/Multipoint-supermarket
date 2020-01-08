const files = require.context(
    "@/components",
    true,
    /^\.\/(\w*\/)+index\.(js|vue)$/
  );
  
  export default {
    install(Vue) {
      files.keys().forEach(path => {
        const type = this.typeof(path, files(path));
        switch (type) {
          case "component":
            this.installComponent(Vue, files(path));
            break;
          case "groupComponent":
            this.installGroupComponent(Vue, files(path));
            break;
          case "serveApi":
            this.installServeApi(Vue, files(path));
        }
      });
    },
    typeof(path, file) {
      if (path.lastIndexOf(".js") === -1) {
        return "component";
      } else {
        if (file.default.install) {
          return "serveApi";
        } else {
          return "groupComponent";
        }
      }
    },
    installGroupComponent(Vue, file) {
      const components = file.default;
      Object.keys(components).forEach(name => {
        Vue.component("nb" + name, components[name]);
      });
    },
    installComponent(Vue, file) {
      const options = file.default;
      const name = options.name;
      Vue.component("Fn" + name, options);
    },
    installServeApi(Vue, file) {
      Vue.use(file.default);
    }
  };
  