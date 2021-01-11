const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
      runtimeCompiler:true,
    chainWebpack: config => {
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm-bundler.js') // vue完整版
    }
}