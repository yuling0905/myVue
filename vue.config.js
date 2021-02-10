module.exports = {
    publicPath: process.env.BASE_URL,
    assetsDir: 'static',
    indexPath: 'index.html',
    filenameHashing: true,//hash值来控制文件名缓存
    pages: undefined,//多页面配置 默认是undefined
    lintOnSave: true,
    runtimeCompiler: false,
    productionSourceMap: false,// 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    crossorigin: undefined,//。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。 默认false
    integrity: false,
    // configureWebpack 可以是对象或者函数
    // 打包文件大小
    configureWebpack: config => {
      process.env.NODE_ENV === 'production' && config.optimization && (config.optimization.splitChunks.minSize = 10000)
      config.performance = { maxAssetSize: 1024 * 300 }
    },
    css: {
      requireModuleExtension: true,
      extract: true,//将css文件单独提取出来放到一个css里面
      sourceMap: false,//是否开启css sourceMap
      loaderOptions: {
        css: {},
        postcss: {},
      },
    },
    devServer: {
      open: false,//是否用默认的浏览器打开开发的网页
      host: '0.0.0.0',
      port: 7799,
      https: false,
      hotOnly: false,
      proxy: {
        '/api': {
          target: process.env.TARGET,
          secure: false,
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      },
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    // parallel: require('os').cpus().length > 1,
    pwa: {},
    pluginOptions: {},
  }
  