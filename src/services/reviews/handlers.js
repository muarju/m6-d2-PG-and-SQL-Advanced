import db from "../../db/connection.js";

export const list = async (req, res, next) => {
	try {
		const reviews = await db.query(`SELECT * FROM reviews`);
		res.send(reviews.rows);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const create = async (req, res, next) => {
	try {
		const {comment,rate,product_id} = req.body;
		const product = await db.query(
		    `INSERT INTO reviews(comment,rate,product_id) VALUES('${comment}','${rate}',${product_id})  RETURNING *;`
			);
		res.send(product.rows[0]);
	} catch (error) {
		res.status(500).send(error);
	}
};