import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";


export default async function getPeople(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const db = await open({
        filename: "./mydb.sqlite",
        driver: sqlite3.Database,
    });
    const people = await db.all("SELECT * FROM person");

    res.status(200).json(people);
}
