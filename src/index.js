const server = require('./server');
const Kafka = require('./kafka/kafka');
const KafkaService = require('./kafka/kafkaService');
const MessageController = require('./controller/messageController');

Kafka.setup();
KafkaService.consume('chat-topic');

server.start();

MessageController.startPost();