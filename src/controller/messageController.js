const Server = require('../server/server');
const KafkaService = require('./../kafka/kafkaService');
const server = Server.getServer();
const routes = require('./../routes/routes');

const messageController = () => {
  const startPost = () => {
    server.post(routes.messages.post, (req, res, next) => {
      const { username, message } = req.body;
      let finalMessage = JSON.stringify({ username, message });
      KafkaService.send('chat-topic', finalMessage)

      if (username && message) {
        res.send(200, "Successfully sent");
        next();
      }
      if (!username || !message) {
        res.send(400, "Send non-empty data, please")
        next()
      }

    })
  }

  return {
    startPost
  }
}

module.exports = messageController();