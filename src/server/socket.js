const io = require('socket.io');
const restifyServer = require('./server').getServer();

const socket = () => {
  const config = {
    cors: {
      origin: "*",
      methods: ["*"],
      allowedHeaders: ["*"],
      credentials: true
    }
  }
  let socket = io(restifyServer.server, config);
  const startWebSocket = () => {
    socket.on('connection', (socket) => console.log(`${socket.handshake.headers.origin} connected`))
  }

  const getSocket = () => socket;
  return {
    startWebSocket,
    getSocket
  }
}

module.exports = socket();