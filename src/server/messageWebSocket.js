const server = require('./server');
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('connected')
});