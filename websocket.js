const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", function connection(ws) {
  console.log("connection");
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    // messages.push(data.toString());
    console.log(data);
  });

  ws.on("close", function close() {
    console.log("disconnected");
  });

  setInterval(() => {
    ws.send("ping" + new Date().getTime());
  }, 3000);
  //   ws.send(messages);
});
