var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  IS_MOCK: 0, // 是否启用mock数据 ？1是，0否
  IS_TEST: 0 // 是否使用测试环境 ？1是，0否
})
