let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: null,
    database: "Codenotch"
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexion correcta")
    }
    
});

// let sql = "CREATE TABLE Codenotch(id INT AUTO_INCREMENT PRIMARY KEY, calle VARCHAR(100), numero INT, ciudad VARCHAR(30))";

// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Tabla creada");
//         console.log(result);
//     }
// });

// let sql2 = "CREATE TABLE direccion(id INT AUTO_INCREMENT PRIMARY KEY, calle VARCHAR(100), numero INT, ciudad VARCHAR(30))";

// connection.query(sql2, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Segunda tabla creada");
//         console.log(result);
//     }
// });

// let sql = "CREATE TABLE alumnos(id INT AUTO_INCREMENT PRIMARY KEY, contraseña VARCHAR(10), edad INT, nacionalidad VARCHAR(30))";

// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Tabla creada");
//         console.log(result);
//     }
// });

// sql = "CREATE TABLE profesores(id INT AUTO_INCREMENT PRIMARY KEY, contraseña VARCHAR(10), edad INT, nacionalidad VARCHAR(30))";

// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Tabla creada");
//         console.log(result);
//     }
// });

// sql = "CREATE TABLE asignaturas(id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(40), horas INT, cualificacion VARCHAR(30))";

// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Tabla creada");
//         console.log(result);
//     }
// });





// sql = "DROP TABLE direccion"
// connection.query(sql, function(err,result)
// {
//     if(err)
//     console.log(err);
//     else{
//         console.log("Tabla borrada");
//         console.log(result);
//     }
// });

// sql = "ALTER TABLE profesores ADD Experiencia VARCHAR(100)"
// connection.query(sql, function(err,result)
// {
//     if(err)
//     console.log(err);
//     else{
//         console.log("Columna añadida")
//         console.log(result);
//     }
// });

// sql = "ALTER TABLE profesores Drop Experiencia"
// connection.query(sql, function(err,result)
// {
//     if(err)
//     console.log(err);
//     else{
//         console.log("Columna borrada")
//         console.log(result);
//     }
// });

