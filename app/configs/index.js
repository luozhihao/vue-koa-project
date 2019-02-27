const $envs = {
    develop: {
        serverApi: 'http://www.baidu.com/',
        clientApi: 'http://www.luozhihao.com/',
        pathPrefixRE: '/',
    },
    product: {
        serverApi: 'http://www.google.com/',
        clientApi: 'http://www.laobo.com/',
        pathPrefixRE: '/',
    }
};

const env = $envs[process.env.NODE_ENV] || $envs.product;

global.config = env;
module.exports = env;
