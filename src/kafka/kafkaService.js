const { producer, Consumer, client } = require('./kafka');
const socket = require('./../server/socket').getSocket();

const KafkaService = () => {

  const send = (topic, message) => {
    const payloads = [{ topic, messages: message }];
    producer.send(payloads, (err, data) => {
      if (err) {
        console.log(`Erro ao enviar: ${err}`);
      }
      console.log(`Operação Efetuada com sucesso: ${data}`);
    })

  }

  const consume = (topic) => {
    const consumer = new Consumer(client, [{ topic }], { autoCommit: false, encoding: 'utf-8' });
    consumer.on("message", async (message) => {
      socket.emit("message", JSON.parse(message.value));
    });
  }

  return {
    send,
    consume
  }

}

module.exports = KafkaService();