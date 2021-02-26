const server = require('./server/server');
const Kafka = require('./kafka/kafka');
const KafkaService = require('./kafka/kafkaService');
const socket = require('./server/socket');
const MessageController = require('./controller/messageController');

Kafka.setup();
KafkaService.consume('chat-topic');

server.start();
socket.startWebSocket();

MessageController.startPost();