const  createProxyMiddleware  = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/login/process"],
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
  app.use(
    ["/dodajlokaciju/process"],
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};