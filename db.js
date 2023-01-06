import mysql from 'mysql';

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@FEBruary1994",
    database: "blog"
});