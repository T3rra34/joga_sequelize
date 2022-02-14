const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const Sequlize = require("sequelize");
const Sequlize = new Sequlize('mysql://root:qwerty@localhost:3155/joga_sequelize')

Sequlize
	.authenticate()
	.then(() => {
		console.log('Unable to connect to the database.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

app.get("/", (req, res) => {
	res.json({ message: "Welcome to sequelize appolcation. "});
});

app.listen(3155, () => {
	console.log('Server is running on http://localhost:3000');
}); 