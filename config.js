module.exports = { 
    serverPort: '3000', 

    // 小程序 appId 和 appSecret 
    // 请到 https://mp.weixin.qq.com 获取 AppID 和 AppSecret
    appId:process.env.APP_ID || '', 
    appSecret:process.env.APP_SECRET || '', 

    // mongodb 连接配置，生产环境请使用更复杂的用户名密码
    // mongoHost: '127.0.0.1', 
    mongoHost: process.env.MONGO_HOST || '111.230.207.213', 
    mongoPort: process.env.MONGO_PORT || '27017', 
    mongoUser: process.env.MONGO_USER || 'weapp', 
    mongoPass: process.env.MONGO_PASS || 'weapp-dev', 
    mongoDb: process.env.MONGO_DB || 'weapp'
};