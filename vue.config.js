const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});
module.exports = defineConfig({
  lintOnSave: false,
});

module.exports = {
  devServer: {
    proxy: "http://localhost:8000",
  },
};
