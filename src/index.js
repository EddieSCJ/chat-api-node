const server = require('./server/server');
// const Kafka = require('./kafka/kafka');
// const KafkaService = require('./kafka/kafkaService');
const MessageController = require('./controller/messageController');

// Kafka.setup();
// KafkaService.consume('chat-topic');

server.start();
server.startWebSocket();

MessageController.startPost();