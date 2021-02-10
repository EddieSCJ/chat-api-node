const Kafka = require('kafka-node');

const kafka = () => {
  const kafkaServer = "kafka:9092";
  const Producer = Kafka.Producer;
  const Consumer = Kafka.Consumer;
  const client = new Kafka.KafkaClient({ kafkaHost: kafkaServer });
  const producer = new Producer(client);

  const send = (topic, message) => {
    const payloads = [{ topic, messages: message }];

    producer.on("ready", () => {
      producer.send(payloads, (err, data) => {
        if (err) {
          console.log(`Erro na hora de enviar: ${err}`);
          return;
        }
        console.log(`Operação Efetuada com sucesso: ${data}`);
      })
    })
  }

  const consume = (topic) => {
    const consumer = new Consumer(client, [{ topic }], { autoCommit: false, encoding: 'utf-8' });
    consumer.on("message", async (message) => {
      console.log(message);
    });

    consumer.on('error', function (err) {
      console.log('error', err);
    });
  }

  return {
    send,
    consume
  }
}

module.exports = kafka();