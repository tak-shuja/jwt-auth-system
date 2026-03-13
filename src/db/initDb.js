import users from "../data/users.js";
import db from "./dbConnection.js";

(function initDb() {
  createUsersTable();

  insertUsersIntoDatabase();
})();

function createUsersTable() {
  db.exec(`
        CREATE TABLE users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL)
        `);
}

function insertUsersIntoDatabase() {
  const insert = db.prepare(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
  );

  users.forEach((user) => {
    insert.run(user.name, user.email, user.password);
  });
}
