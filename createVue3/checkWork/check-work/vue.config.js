module.exports = {
    publicPath: './',
    lintOnSave: false,
    devServer: {
      proxy: {
        '/api': {
          target: 'http://tm.lilanz.com/oa/api/checkOutCore.ashx',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
       
      }
        
      },
      configureWebpack: {
        resolve: {
          alias: {
            // "assets": "@/assets",
            // "network": "@/network",
            // "components": "@/components",
            // "common": "@/common",
            // "views": "@/views",
            // "utils": "@/utils"
          }
        }
      }
    }
