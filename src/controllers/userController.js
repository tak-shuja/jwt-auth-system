import db from "../db/dbConnection.js";

function getAllUsers(_, res) {
  const query = db.prepare("SELECT * FROM users");

  res.status(200).json({
    data: query.all(),
  });
}

function getUserById(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: "Invalid ID",
    });
  }

  const query = db.prepare("SELECT name, email FROM users WHERE id=?");
  const user = query.get(id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.status(200).json({
    data: user,
  });
}

export { getAllUsers, getUserById };
