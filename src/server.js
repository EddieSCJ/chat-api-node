const restify = require('restify');
const restifyServer = restify.createServer();

const server = () => {

  restifyServer.use(
    function crossOrigin(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      return next();
    }
  );

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