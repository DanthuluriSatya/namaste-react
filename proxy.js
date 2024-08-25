// proxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://www.swiggy.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  })
);

app.use(express.static('build'));

app.listen(3000, () => {
  console.log('Proxy server is running on http://localhost:3000');
});
