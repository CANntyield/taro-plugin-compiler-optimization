### Introduction
采用多核心和缓存提升Taro的编译打包速度的Taro插件

### Usage
```
npm install --save-dev thread-loader cache-loader taro-plugin-compiler-optimization

// 将其配置到taro config.js中的plugins中
// 根目录/config/index.js
plugins: ['taro-plugin-compiler-optimization']
```
