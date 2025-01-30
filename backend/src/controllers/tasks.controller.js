import { pool } from "../db.js";

//los errors los estoy manejando con express-promise-router

export const getAllTasks = async (req, res, next) => {
  const { rows } = await pool.query("SELECT * FROM task");
  console.log(rows);
  res.json(rows);
};

export const getTask = async (req, res) => {
  let id = req.params.id;
  const { rows } = await pool.query("SELECT * FROM task WHERE id=$1", [id]);

  if (rows.length == 0) {
    res.status(404).json({
      message: "No existe una tarea con ese id.",
    });
  }

  return res.json(rows[0]);
};

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const { rows } = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );

    res.json(rows[0]);
  } catch (error) {
    if (error.code == "23505") {
      return res.status(409).json({
        message: "Ya existe una tarea con este título.",
      });
    }
    next(error);
  }
};

export const updateTask = async (req, res) => {
  let id = req.params.id;
  let { title, description } = req.body;

  const { rows } = await pool.query(
    "UPDATE task SET title=$1, description=$2 WHERE id=$3 RETURNING*",
    [title, description, id]
  );

  if (rows.length == 0) {
    return res.status(404).json({
      message: "No existe una tarea con ese id.",
    });
  }

  return res.json(rows[0]);
};

export const deleteTask = async (req, res) => {
  let id = req.params.id;
  const result = await pool.query("DELETE FROM task WHERE id= $1 RETURNING*", [
    id,
  ]);
  console.log(result);
  if (result.rowCount == 0) {
    return res.status(404).json({
      message: "No existe una tarea para el id " + id,
    });
  }
  return res.sendStatus(204);
};
