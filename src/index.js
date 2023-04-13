// importaciones
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger.json');

// configurar el servidor
const server = express();
server.use(cors());
server.use(express.json({ limit: "10mb" }));
server.set("view engine", "ejs");
server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//arrancar el servidor
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


//crear conexión con base de datos

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    database: 'freedb_project-mod-4-tema-8',
    user: 'freedb_root-beafig',
    password: 'nU4ywdU!5VJJ#js',
  });
  await connection.connect();
  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );
  return connection;
}

// let connection; // Aquí almacenaremos la conexión a la base de datos

// mysql
//   .createConnection({
//     host: "sql.freedb.tech",
//     database: "freedb_project-mod-4-tema-8",
//     user: "freedb_root-beafig",
//     password: "nU4ywdU!5VJJ#js",
//   })
//   .then((conn) => {
//     connection = conn;
//     connection
//       .connect()
//       .then(() => {
//         console.log(
//           `Conexión establecida con la base de datos (identificador=${connection.threadId})`
//         );
//       })
//       .catch((err) => {
//         console.error("Error de conexion: " + err.stack);
//       });
//   })
//   .catch((err) => {
//     console.error("Error de configuración: " + err.stack);
//   });

// petición GET al servidor
server.get("/api/projects/all", async (req, res) => {
  let sql =
    "SELECT * FROM projects, autors WHERE projects.fk_autors = autors.idAutor";
  const connection = await getConnection();
  const [results] = await connection.query(sql)
  res.json(results);
  connection.end();
})

server.post("/api/projects/add", async (req, res) => {
  const data = req.body;

  if (!data.autor || !data.job || !data.image || !data.name || !data.slogan || !data.repo || !data.demo || !data.technologies || !data.desc || !data.photo) {
    res.json({
      success: false,
      error: `Mandatory fields:`
    });
  } else {
    let sqlAutor = "insert into autors (autor, job, image ) values (?, ?, ?)";
    let valuesAutor = [data.autor, data.job, data.image]
    const connection = await getConnection();
    const [results] = await connection.query(sqlAutor, valuesAutor);
    console.log(results);
    let sqlProject =
      "insert into projects (name, slogan, repo, demo, technologies, description, photo, fk_autors ) values (?, ?, ?, ?, ?, ?, ?, ?)";
    let valuesProject = [
      data.name,
      data.slogan,
      data.repo,
      data.demo,
      data.technologies,
      data.desc,
      data.photo,
      results.insertId,
    ];
    const [resultsInsert] = await connection.query(sqlProject, valuesProject)
    let response = {
      success: true,
      cardURL: `https://gestor-proyectos.onrender.com/api/projects/detail/${resultsInsert.insertId}`,
    };
    res.json(response);
    connection.end();
  }
});

server.get("/api/projects/detail/:projectId", async (req, res) => {
  const projectId = req.params.projectId;
  const sql = "SELECT * FROM projects, autors WHERE projects.fk_autors = autors.idAutor AND idProjects = ?";
  const connection = await getConnection();
  const [results] = await connection.query(sql, [projectId])
  console.log(results);
  res.render('project_detail', results[0]);
  connection.end();
});

//servidor de estáticos
server.use(express.static("./src/public-react"));
server.use(express.static("./src/public-css/"))
