const Kafka = require('kafka-node');
const kafkaServer = "kafka:9092";
const Producer = Kafka.Producer;
const Consumer = Kafka.Consumer;
const client = new Kafka.KafkaClient({ kafkaHost: kafkaServer });
const producer = new Producer(client);

const kafka = () => {

  const setup = () => {
    let topicsToCreate = [{
      topic: 'chat-topic',
      partitions: 1,
      replicationFactor: 1
    }];
    client.createTopics(topicsToCreate, ((error, result) => error ? console.log(error) : console.log(result)));

    producer.on("error", function (err) {
      console.log("Erro ao enviar: ", err)
    })

  }

  return {
    setup,
    producer,
    client,
    Consumer
  }
}

module.exports = kafka();