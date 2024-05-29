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
  const pingInterval = setInterval(() => {
    const temp = generateRandomData();
    // ws.send("ping");
    // ws.ping();
    console.log("server-sent==", temp);
    ws.send(JSON.stringify(temp));
  }, 3000);

  ws.on("close", function close() {
    clearInterval(pingInterval);
    console.log("disconnected");
  });

  ws.on("error", function close() {
    clearInterval(pingInterval);
    console.log("error");
  });

  //   ws.on("pong", () => {
  //     console.log("pong received");
  //   });
});

const generateRandomData = () => {
  let data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      dataValue: Math.random() * 100,
      dateTime: new Date().toISOString() + Math.random() * 100,
    });
  }
  return data;
};
