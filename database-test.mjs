import sqlite3 from "sqlite3";
import { open } from "sqlite";

(async function setup() {
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });
  await db.migrate({ force: true });
  const persons = await db.all("SELECT * FROM person");
  const vehicle = await db.all("SELECT * FROM vehicle");
  console.log(JSON.stringify(persons, null, 2));
  console.log(JSON.stringify(vehicle, null, 2));
})();
