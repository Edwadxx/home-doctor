const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: (config) => {
    //调试JS
    config.devtool = "source-map";
  },
  css: {
    //查看CSS属于哪个css文件
    sourceMap: true,
  },
  // vue.config.js
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '家庭医生后台管理系统'
        return args
      })
  },
  devServer: {
    //开发环境下设置为编译好以后直接打开浏览器浏览
    // open: true,
    hot:true,
    compress: true,
		allowedHosts: "all",
    proxy: {
      "/dev": {
        pathRewrite: {
          "^/dev": '/',
        },
        // 目标代理服务器
        target: "http://127.0.0.1:3001",
        // 开启代理，本地创建一个虚拟服务器，允许跨域
        changeOrigin: true,
      },
    },
  },
});
