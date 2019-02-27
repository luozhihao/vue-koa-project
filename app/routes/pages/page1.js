const router = require('koa-router')();

const Page1 = async (ctx, next) => {
    console.log('222');

    await ctx.render('page1');
};

router.get(`${global.config.pathPrefixRE}page1/*`, Page1);

module.exports = router;