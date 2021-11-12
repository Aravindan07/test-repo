import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello from Typescript and NodeJS!!!");
});

const port = process.env.port || 7000;

app.listen(port, () => {
	console.log("Server started at port 7000");
});
