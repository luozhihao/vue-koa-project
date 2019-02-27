const router = require('koa-router')();

const Page2 = async (ctx, next) => {
    console.log('333');

    await ctx.render('page2');
};

router.get(`${global.config.pathPrefixRE}page2/*`, Page2);

module.exports = router;