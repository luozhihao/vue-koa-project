const pageConf = ['index', 'page1', 'page2'];

module.exports = (app) => {
    pageConf.forEach(item => {
        const pageRouter = require(`./pages/${item}`);

        console.log(`监听路由页面： ${global.config.pathPrefixRE}${item}`);
        app.use(pageRouter.routes(), pageRouter.allowedMethods());
    });
};
