const router = require('koa-router')();

const Index = async (ctx, next) => {
    console.log('111');

    await ctx.render('index');
};

router.get(`${global.config.pathPrefixRE}*`, Index);

module.exports = router;