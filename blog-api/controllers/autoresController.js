const pool = require('../models/db');

// Obtener todos los autores
exports.getAutores = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM autores');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAutor = async (req, res) => {
  try {
    const { nombre, email, imagen } = req.body;
    const [result] = await pool.query(
      'INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)',
      [nombre, email, imagen]
    );
    res.status(201).json({ id: result.insertId, nombre, email, imagen });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener los posts de un autor concreto
exports.getPostsDeAutor = async (req, res) => {
  try {
    const autorId = req.params.id;
    const [rows] = await pool.query(
      `SELECT p.*, a.nombre, a.email, a.imagen
       FROM posts p
       JOIN autores a ON p.autor_id = a.id
       WHERE autor_id = ?`,
      [autorId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};