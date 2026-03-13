import { DatabaseSync } from "node:sqlite";

let dbName = "database.db";

dbName = ":memory:";

const db = new DatabaseSync(dbName);

export default db;
