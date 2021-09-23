const path = require('path')
console.log(path);
module.exports = {
    hostname: '0.0.0.0',
    port: 9999,
    // 反向代理
    proxy: {
        '/api': {
            target: 'https://www.zhihu.com/api/v3/feed/topstory/recommend/',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
        }
    }
}