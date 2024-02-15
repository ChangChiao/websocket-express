const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", function connection(ws) {
  console.log("connection");
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    // messages.push(data.toString());
    console.log("server-received==", data);
    // if (data === "ping") {
    ws.send(JSON.stringify({ message: "ping" }));
    // }
  });
  //   const pingInterval = setInterval(() => {
  //     ws.send("ping");
  //     // ws.ping();
  //   }, 3000);

  ws.on("close", function close() {
    // clearInterval(pingInterval);
    console.log("disconnected");
  });

  //   ws.on("pong", () => {
  //     console.log("pong received");
  //   });
});
