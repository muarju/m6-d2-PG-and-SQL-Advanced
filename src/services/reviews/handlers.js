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
    const { comment, rate, product_id } = req.body;
    const product = await db.query(
      `INSERT INTO reviews(comment,rate,product_id) VALUES('${comment}','${rate}',${product_id})  RETURNING *;`
    );
    res.send(product.rows[0]);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const upgraded = async (req, res, next) => {
  try {
    const { reviewId } = req.params;

    const { comment, rate, product_id } = req.body;

    const upgradedReview = await db.query(
      `UPDATE reviews SET
          comment='${comment}' , rate=${rate} ,  product_id=${product_id} WHERE id=${reviewId} RETURNING *;`
    );

    const [found, ...rest] = upgradedReview.rows;
    res.status(found ? 200 : 400).send(found);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const { reviewId } = req.params;

    const deleteR = await db.query(`DELETE FROM reviews WHERE id=${reviewId};`);

    res.status(deleteR.rowCount ? 200 : 400).send("Delated");
  } catch (error) {
    res.status(500).send(error);
  }
};
