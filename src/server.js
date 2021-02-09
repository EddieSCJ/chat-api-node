const restify = require('restify');
const restifyServer = restify.createServer();

const server = () => {

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