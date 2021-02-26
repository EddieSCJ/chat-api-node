const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const restifyServer = restify.createServer();
const io = require('socket.io');

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

  const startWebSocket = () => {
    const config = {
      cors: {
        origin: "*",
        methods: ["*"],
        allowedHeaders: ["*"],
        credentials: true
      }
    }

    const socket = io(restifyServer.server, config);
    socket.on('connection', (socket) => console.log('Connected'))
  }

  const getServer = () => restifyServer;

  return {
    start,
    getServer,
    startWebSocket
  }
}

module.exports = server();