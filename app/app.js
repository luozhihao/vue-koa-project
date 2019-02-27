const Koa = require('koa');
const json = require('koa-json');
const path = require('path');
const onerror = require('koa-onerror');
const favicon = require('koa-favicon');
const bodyparser = require('koa-bodyparser');
const compress = require('koa-compress');

const app = new Koa();

// error handler
onerror(app);

const render = require('koa-art-template');
const config = require('./configs/index');

// global middlewares
render(app, {
    root: path.join(__dirname, '../client/dist'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'product'
});

Object.keys(config).map(item => {
    app[item] = config[item];
});

app.use(compress({
    filter(content_type) {
        return /text/i.test(content_type);
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
}));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));

app.use(json());

app.use(require('koa-static')(path.join(__dirname, '../client/dist')));

// 页面路由注入
require('./routes/')(app);

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});

module.exports = app;