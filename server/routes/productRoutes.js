const express = require('express');
const db = require('../db');

const router = express.Router();

// Lấy danh sách sản phẩm
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Lấy thông tin sản phẩm theo ID
router.get('/find/:id', (req, res) => {
  const productId = req.params.id;
  const sql = 'SELECT * FROM products WHERE id = ?';
  db.query(sql, productId, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send(result[0]);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });
});

// Thêm sản phẩm mới
router.post('/add', (req, res) => {
  const { name, price, description } = req.body;

  const sql = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)';
  const values = [name, price, description];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.status(200).json({ message: 'Product added successfully' });
    }
  });
});

// Cập nhật thông tin sản phẩm
router.put('/update/:id', (req, res) => {
  const productId = req.params.id;
  const { name, price, description } = req.body;

  const sql = 'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?';
  const values = [name, price, description, productId];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.status(200).json({ message: 'Product updated successfully' });
    }
  });
});

// Xoá sản phẩm
router.delete('/delete/:id', (req, res) => {
  const productId = req.params.id;
  const sql = 'DELETE FROM products WHERE id = ?';
  db.query(sql, productId, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.status(200).json({ message: 'Product deleted successfully' });
    }
  });
});

module.exports = router;
