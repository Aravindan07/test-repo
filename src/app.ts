import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello from Typescript and NodeJS");
});

app.listen(7000, () => {
	console.log("Server started at port 7000");
});
