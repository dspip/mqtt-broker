const aedes = require("aedes")({});
const mqtt = require("mqtt");
const server = require("net").createServer(aedes.handle);
const port = 1883;

server.listen(port, function () {
	console.log("server started and listening on port ", port);
});

let client = mqtt.connect("mqtt://192.168.2.2");
client.on("error", (err) => {
	console.log(`failed to connect to self,\N[ERROR] ${err}`);
});
client.on("connect", function () {
	console.log("connected to self, logging 'fingers'");
	client.subscribe("fingers");
	// setInterval(() => client.publish("fingers", "a"), 1000);
});
client.on("message", function (topic, message) {
	console.log({ topic, message: JSON.parse(message.toString()) });
	// server.getConnections((_, connections) => {
	// 	console.log({ connections });
	// });
});
