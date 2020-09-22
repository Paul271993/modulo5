const { request } = require('express');
const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


let connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: null,
    database: "codenotch2"
});



connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexion correcta")
    }
    
});



// Obtiene los datos del alumno con el id pasado por parametro:

app.get("/alumnos/:id", function(request,response){
     let sql = "SELECT * FROM students WHERE student_id="+request.params.id;
connection.query(sql, function (err, result)
{
    if(err)
    console.log(err);
    else 
    {
        // console.log("Dato insertado");
        // console.log(result);
        response.send(result)
    }
    

});
  
})

// Obtiene toda la lista de alumnos:

app.get("/alumnos", function(request,response){
    let sql = "SELECT * FROM students";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});

   
})

// Añade un nuevo alumno:

app.post("/alumnos", function(request,response){
    let sql = "INSERT INTO students (first_name, last_name) VALUE (\"Peperino\", \"Macedonio\")";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

// Modificar un alumno:

app.put("/alumnos", function(request,response){
    let sql = "UPDATE students SET first_name='"+request.body.first_name+"', last_name='"+request.body.last_name+"' WHERE student_id="+request.body.id;
connection.query(sql, function (err, result)
{;
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.delete("/alumnos/:id", function(request,response){
    let sql = "DELETE FROM students WHERE student_id="+request.params.id+"";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})


/////////// ENDPOINTS DE PROFESORES ///////////




app.get("/profesores/:id", function(request,response){
    let sql = "SELECT * FROM teachers WHERE teacher_id="+request.params.id;
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})


app.get("/profesores", function(request,response){
    let sql = "SELECT * FROM teachers";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.post("/profesores", function(request,response){
    let sql = "INSERT INTO teachers (first_name, last_name) VALUE (\"Peperino\", \"Macedonio\")";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.put("/profesores/:id", function(request,response){
    let sql = "UPDATE teachers SET first_name= \"Amanciooooo\" WHERE teacher_id="+request.params.id;
connection.query(sql, function (err, result)
{;
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.delete("/profesores/:id", function(request,response){
    let sql = "DELETE FROM teachers WHERE teacher_id="+request.params.id+"";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})


/////////////////////// ENDPOINT DE GRUPOS ///////////////////


app.get("/grupos/:id", function(request,response){
    let sql = "SELECT * FROM groups WHERE group_id="+request.params.id;
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})


app.get("/grupos", function(request,response){
    let sql = "SELECT * FROM groups";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.post("/grupos", function(request,response){
    let sql = "INSERT INTO groups (name) VALUE (\"LameCharcos\")";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.put("/grupos/:id", function(request,response){
    let sql = "UPDATE groups SET name= \"Vagos\" WHERE group_id="+request.params.id;
connection.query(sql, function (err, result)
{;
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.delete("/grupos/:id", function(request,response){
    let sql = "DELETE FROM groups WHERE group_id="+request.params.id+"";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})


//////////////////// ENDPOINT DE ASIGNATURAS ///////////////


app.get("/asignaturas/:id", function(request,response){
    let sql = "SELECT * FROM subjects WHERE subjects_id="+request.params.id;
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})


app.get("/asignaturas", function(request,response){
    let sql = "SELECT * FROM subjects";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.post("/asignaturas", function(request,response){
    let sql = "INSERT INTO subjects (title) VALUE (\"Sexologia\")";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.put("/asignaturas/:id", function(request,response){
    let sql = "UPDATE subjects SET title= \"Antropologia\" WHERE subject_id="+request.params.id;
connection.query(sql, function (err, result)
{;
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.delete("/asignaturas/:id", function(request,response){
    let sql = "DELETE FROM subjects WHERE subject_id="+request.params.id+"";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})


//////////////////////////// ENDPOINT DE NOTAS ////////////////////


app.get("/notas/:id", function(request,response){
    let sql = "SELECT mark FROM marks WHERE student_id="+request.params.id;
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})


app.post("/notas", function(request,response){
    let sql = "INSERT INTO marks (mark) VALUE (69)";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.put("/notas/:id", function(request,response){
    let sql = "UPDATE marks SET mark= 21 WHERE mark_id="+request.params.id;
connection.query(sql, function (err, result)
{;
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.delete("/profesores/:id", function(request,response){
    let sql = "DELETE FROM marks WHERE mark_id="+request.params.id+"";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})



/////////////////// ENDPOINTS ADICIONALES ///////////////////


app.get("/media/:id", function(request,response){
    let sql = "SELECT AVG (mark) FROM marks WHERE student_id="+request.params.id;
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})


app.get("/apuntadas/:id", function(request,response){
    let sql = "SELECT subject_id, COUNT(*) FROM marks WHERE student_id="+request.params.id;
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.get("/apuntadas", function(request,response){
    let sql = "SELECT (students.first_name, students.last_name), subjects.name FROM students,subjects NATURAL JOIN subjects";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.put("/profesores/:id", function(request,response){
    let sql = "UPDATE teachers SET first_name= \"Amanciooooo\" WHERE teacher_id="+request.params.id;
connection.query(sql, function (err, result)
{;
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})

app.delete("/profesores/:id", function(request,response){
    let sql = "DELETE FROM teachers WHERE teacher_id="+request.params.id+"";
connection.query(sql, function (err, result)
{
   if(err)
   console.log(err);
   else 
   {
      
       response.send(result)
   }
   

});
 
})


app.listen(1100);

// app.get('/users', (request, response) => {
//     pool.query('SELECT * FROM users', (error, result) => {
//         if (error) throw error;
 
//         response.send(result);
//     });
// });

