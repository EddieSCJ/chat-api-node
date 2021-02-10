const server = require('./server');
const Kafka = require('./kafka/kafka');

Kafka.consume("chat-topic");
Kafka.send("chat-topic", "Ola, primeiro teste");
server.start();