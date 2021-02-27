# Chat API
A simple node with kafka and restify.js message service to work as a chat using a websocket to connect the [Frontend Application](https://github.com/EddieSCJ/chat-frontend)

### How it works?
When you write a message in the frontend application, the frontend app will send a post request to this backend service, at this post we will validate and use a producer to send this message to a kafka queue where a consumer (in anywhere) will consume the message and implement it's own solution, our solution is to use a websocket (provided by socket.io) to connect the frontend app and after the message be consumed, send it processed to the chat.

### What do I need to run it?
* Docker 
* Download this project and open the terminal in its folder

### Docker commands to run this app 
* After open the terminal in its folder, just type
```
docker build -t chat-api .
```
```
docker-compose -up
```

Enjoy the project and any doubt, just contact me by email.
