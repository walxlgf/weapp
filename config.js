module.exports = { 
    serverPort: '3000', 

    // 小程序 appId 和 appSecret 
    // 请到 https://mp.weixin.qq.com 获取 AppID 和 AppSecret
    appId:'wxc14d0ff891dbbb64', 
    appSecret:'654f6c6559336fa79d13c85e4cb2e080', 

    // mongodb 连接配置，生产环境请使用更复杂的用户名密码
    // mongoHost: '127.0.0.1', 
    mongoHost:'mongodb', 
    mongoPort:'27017', 
    mongoUser:'weapp', 
    mongoPass:'weapp-dev', 
    mongoDb:'weapp'
};