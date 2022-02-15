const Sequlize = require("sequelize");
const Sequlize = new Sequlize('mysql://root:qwerty@localhost:3155/joga_sequelize')

const Article = require('../models/article')(Sequlize, Sequlize.Datatypes);

const getAllArtticles = (req, res) => {
	Article.findAll()
	.then(Article => {
		console.log(articles)
		return res.status(200).json({ articles });
	})
	.catch (error => {
		return res.status(500).send(error.message);
	})
}

const getArticleBySlug = (req, res) => {
	Article.findOne({
		where: {
			slug : req.params.slug
		}
	})
	.then(Article => {
		console.log(Article)
		return res.status(200).json({ Article });
	})
	.catch (error => {
		return res.status(500).send(error.message);
	})
}

module.exports = {
	getAllArtticles,
	getArticleBySlug
};