import bcrypt from "bcrypt";
import { pool } from "../db.js";
import { createAccessToken } from "../libs/jwt.js";
import md5 from "md5"


export const login = async (req, res) => {
  const { email, password } = req.body;

  const { rows } = await pool.query("SELECT * FROM users WHERE email=$1", [
    email,
  ]);

  if (rows.length == 0) {
    return res.status(400).json({
      message: "El correo no está registrado",
    });
  }
  const validPassword = await bcrypt.compare(password, rows[0].password);

  if (!validPassword) {
    res.status(400).json({
      message: "La contraseña es incorrecta.",
    });
  }
  const token = await createAccessToken({ id: rows[0].id });
  res.cookie("token", token, {
    httpOnly: false,
    secure:true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.json(rows[0]);
};

export const register = async (req, res, next) => {
  let { name, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);
     const gravatar= `https://www.gravatar.com/avatar/${md5(email)}`

    const result = await pool.query(
      "INSERT INTO users(name, email, password, gravatar) VALUES($1, $2, $3, $4) RETURNING *",
      [name, email, hashPassword, gravatar]
    );


    //////esta porcion está comentada porque no quiero que se loguee el usuario al momento de registrarse//////
    // const token = await createAccessToken({ id: result.rows[0].id });

    // res.cookie("token", token, {
    //   httpOnly: true,
    //   sameSine: "none",
    //   maxAge: 24 * 60 * 60 * 1000,
    // });

    return res.json(result.rows[0]);
  } catch (error) {
    if (error.code == 23505) {
      return res.status(400).json({
        message: "El email ya está registrado.",
      });
    }
    next(error);
  }
};
export const logOut = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(200);
};
export const getProfile = async (req, res) => {
  const result=await pool.query("SELECT * FROm users WHERE id=$1", [req.userId]);

  return res.json(result.rows[0])
};
