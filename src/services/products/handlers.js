import db from "../../db/connection.js";

export const list = async (req, res, next) => {
	try {
		const products = await db.query(`SELECT * FROM products`);
		res.send(products.rows);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const create = async (req, res, next) => {
	try {
		const { name, last_name, avatar } = req.body;
		const product = await db.query(
			`INSERT INTO products(name,last_name,avatar) VALUES('${name}','${last_name}','${avatar}') RETURNING *;`
		);
		res.send(product.rows[0]);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const single = async (req, res, next) => {
	try {
		const { product_id } = req.params;
		const products = await db.query(
			`SELECT * FROM products WHERE product_id=${product_id};`
		);
		const [found, ...rest] = products.rows;

		res.status(found ? 200 : 404).send(found);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const update = async (req, res, next) => {
	try {
		const { product_id } = req.params;
		const { name, last_name, avatar } = req.body;
		const products = await db.query(
			`UPDATE products
			 SET name ='${name}',
			 last_name = '${last_name}',
			 avatar = '${avatar}',
			 updated_at = NOW()
			 WHERE product_id=${product_id} RETURNING *;`
		);
		const [found, ...rest] = products.rows;
		res.status(found ? 200 : 400).send(found);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const deleteproduct = async (req, res, next) => {
	try {
		const { product_id } = req.params;
		const { name, last_name, avatar } = req.body;
		const dbResult = await db.query(
			`DELETE FROM products
			 WHERE product_id=${product_id};`
		);
		res.status(dbResult.rowCount ? 200 : 400).send();
	} catch (error) {
		res.status(500).send(error);
	}
};
