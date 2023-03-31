// importaciones
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise')

// configurar el servidor
const server = express();
server.use(cors());
server.use(express.json({ limit: '10mb' }));

//arrancar el servidor
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//crear conexión con base de datos

let connection;  // Aquí almacenaremos la conexión a la base de datos

mysql
  .createConnection({
    host: 'sql.freedb.tech',
    database: 'freedb_project-mod-4-tema-8',
    user: 'freedb_root-beafig',
    password: 'nU4ywdU!5VJJ#js',
  })
  .then(conn => {
    connection = conn;
    connection
      .connect()
      .then(() => {
        console.log(`Conexión establecida con la base de datos (identificador=${connection.threadId})`);
      })
      .catch((err) => {
        console.error('Error de conexion: ' + err.stack);
      });
  })
  .catch((err) => {
    console.error('Error de configuración: ' + err.stack);
  });

// petición GET al servidor
server.get('/api/projects/all', (req, res) => {
  let sql = 'SELECT * FROM projects, autors WHERE projects.fk_autors = autors.idAutor';
  connection
    .query(sql)
    .then(([results, fields]) => {
      console.log('Información recuperada:');
      results.forEach((result) => {
        console.log(result);
      });

      res.json(results);
    })
    .catch((err) => {
      throw err;
    });
});

