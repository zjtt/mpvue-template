# wechat-applet-template

> mpvue+mock微信小程序开发模板

# mpVue模板
数据请求使用flyio，使用mock数据时，在/config/dev.env.js中修改IS_MOCK为1即可。
请求baseUrl在src/util/flyio.js中配置。如有多个域名的接口请使用绝对路径

# UI库
## 如果使用iView，可将iView的dist/* cp 到 static中，然后在pages/相应的main.json中的usingComponents配置用的组件。

## 开发环境修改baseURL可在/config/dev.env.js中修改IS_TEST为1即可。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

#在project.config.json中配置微信小程序appid

```
