const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const restifyServer = restify.createServer();

const server = () => {
  const cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ["*"],
    allowHeaders: ["*"],
    exposeHeaders: ["*"]
  })

  restifyServer.pre(cors.preflight);
  restifyServer.use(cors.actual);
  restifyServer.use(restify.plugins.bodyParser({ mapParams: true }));

  const start = () => {
    const PORT = 8080;
    restifyServer.listen(PORT, () => {
      console.log(`Server started at localhost:${PORT}`)
    })
  }


  const getServer = () => restifyServer;

  return {
    start,
    getServer
  }
}

module.exports = server();