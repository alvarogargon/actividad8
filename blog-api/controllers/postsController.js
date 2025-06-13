const pool = require('../models/db');

exports.getPosts = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT p.*, a.nombre, a.email, a.imagen
       FROM posts p
       JOIN autores a ON p.autor_id = a.id`
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { titulo, descripcion, categoria, autor_id } = req.body;
    const [result] = await pool.query(
      'INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)',
      [titulo, descripcion, categoria, autor_id]
    );
    res.status(201).json({ id: result.insertId, titulo, descripcion, categoria, autor_id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};