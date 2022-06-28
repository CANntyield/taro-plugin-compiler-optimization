### 介绍
采用多核心和缓存提升Taro编译打包速度的Taro插件

### 注意

仅支持taro3,react技术栈。css缓存仅支持scss语法。
由于thread-loader限制，该插件不支持vue框架,h5打包。

### 用法
```
npm install --save-dev thread-loader cache-loader taro-plugin-compiler-optimization
```

```
// 将其配置到taro config.js中的plugins中
// 根目录/config/index.js
plugins: [
    ['taro-plugin-compiler-optimization', {
        closeScssCache: false, // 默认开启cache-loader缓存scss策略,若想关闭该策略改为true
    }]
]
```

### 效果展示
优化前3m9s,优化后56.8s，将耗时缩短至三分之一。

优化前耗时  
![优化前](https://gitee.com/canntyield/cand_md_image/raw/master/2021_10/before.PNG)

优化后耗时  
![优化后](https://gitee.com/canntyield/cand_md_image/raw/master/2021_10/after.PNG)
