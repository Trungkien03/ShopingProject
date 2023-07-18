const express = require("express");
const db = require("../db");

const router = express.Router();

// Lấy danh sách tài khoản
router.get("/", (req, res) => {
  const sql = "SELECT * FROM account";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// tìm acccount tài khoản
router.get("/:id", (req, res) => {
  const sql = "SELECT * FROM account WHERE id = ?";
  const accountID = req.params.id;
  db.query(sql, accountID, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send(result[0]);
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  });
});

// Đăng nhập
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM account WHERE email = ? AND password = ?";
  const values = [email, password];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong username/password combination!" });
    }
  });
});

// Đăng ký
router.post("/register", (req, res) => {
  const { fullName, email, phone, password, dateOfBirth, address, status } =
    req.body;

  const sql =
    "INSERT INTO account (fullname, email, phone, password, dateOfBirth, address, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [
    fullName,
    email,
    phone,
    password,
    dateOfBirth,
    address,
    status,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json({ message: "Registration successful" });
    }
  });
});

module.exports = router;
