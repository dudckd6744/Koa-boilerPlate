import mysql from "mysql";

export async function initializeDatabase() {
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306, //mysql 기본포트, 서버 포트쓰면 안된다!
    user: "root",
    password: "013111",
    database: "test", //데이터베이스 어떤걸로 쓸껀지.
  });
  connection.connect(function (err) {
    if (err) throw err;
    console.log("mysql Connected");
  });
  connection.query("CREATE DATABASE  test2", function (error, results, fields) {
    if (error) return console.log("exist Database");
    console.log("created Database");
  });

  connection.end();
}
