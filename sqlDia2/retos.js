let mysql = require("mysql");
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

// let sql = "CREATE TABLE marks(id INT AUTO_INCREMENT PRIMARY KEY, mark_id INT, student_id INT, subject_id INT, date DATE, mark INT)";

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

// let sql = "CREATE TABLE students(id INT AUTO_INCREMENT PRIMARY KEY, student_id INT, first_name VARCHAR(30), last_name VARCHAR(30), group_id INT)";

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

// let sql = "CREATE TABLE groups(id INT AUTO_INCREMENT PRIMARY KEY, group_id INT, name VARCHAR(30))";

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

// let sql = "CREATE TABLE groups(id INT AUTO_INCREMENT PRIMARY KEY, group_id INT, name VARCHAR(30))";

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

// let sql = "CREATE TABLE subjects(id INT AUTO_INCREMENT PRIMARY KEY, subject_id INT, title VARCHAR(30))";

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

// let sql = "CREATE TABLE subject_teacher(id INT AUTO_INCREMENT PRIMARY KEY, subject_id INT, teacher_id INT, group_id INT)";

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

// let sql = "CREATE TABLE teachers(id INT AUTO_INCREMENT PRIMARY KEY, teacher_id INT, first_name VARCHAR(20), last_name VARCHAR(20))";

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

// let sql = "INSERT INTO subjects (title) VALUES (\"Astronomia\")";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }
// });


// let sql = "INSERT INTO students (first_name, last_name) VALUES (\"Jordi\", \"ENP\")";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }
// });


// let sql = "INSERT INTO subject_teacher (subject_id INT)";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }
// });

// sql = "DROP TABLE subject_teacher"
// connection.query(sql, function(err,result)
// {
//     if(err)
//     console.log(err);
//     else{
//         console.log("Tabla borrada");
//         console.log(result);
//     }
// });


// let sql = "INSERT INTO marks (date) VALUES ('2020-09-15')";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }
// });


// let sql = "INSERT INTO marks (student_id, subject_id, date, mark) VALUE (7,1,'2019-12-18',9)";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }
// });

// let sql = "UPDATE marks SET mark= 0";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

// let sql = "SELECT first_name, last_name FROM students";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });



// let sql = "SELECT * FROM teachers";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

// let sql = "DELETE FROM marks WHERE date < '2010-01-01'";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

// let sql = "UPDATE marks SET mark=5 WHERE mark<5 AND subject_id=2";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });



/////////////////////////////////////////////////////////////////////////


// let sql = "SELECT AVG (mark) FROM marks";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });


//RETO 1

//PUNTO 1

// let sql = "SELECT COUNT(*) FROM students";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

//PUNTO 2

// let sql = "SELECT * FROM groups";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

//PUNTO 3

// let sql = "DELETE FROM marks WHERE mark > 5 AND date > '2019-01-01' || date > '2020-01-01'";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

// let sql = "ALTER TABLE students ADD fecha_de_ingreso DATE";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

// let sql = "UPDATE students SET fecha_de_ingreso='2019-08-12' WHERE first_name='Jordi'";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }
// });


//PUNTO 4

// let sql = "SELECT * FROM students WHERE fecha_de_ingreso > '2020-01-01'";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });


//PUNTO 5

// let sql = "SELECT subject_id, COUNT(*) AS numero_profes FROM subject_teacher GROUP BY subject_id"
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });


/////////////////////////////////////////////////////////////////////// RETO 2

// INSERT INTO `subjects` (`subject_id`, `title`, `teacher_id`) VALUES (NULL, '', '1'), (NULL, '', '2');
// INSERT INTO `subject_teacher` (`subject_id`, `teacher_id`, `group_id`) VALUES ('1', '1', '1');


// let sql = "ALTER TABLE teachers ADD subject_id INT";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });


//PUNTO 1

// let sql = "SELECT mark, student_id FROM marks WHERE student_id BETWEEN 1 AND 20 OR mark >8 AND date < '2020-01-01' || date > '2019-01-01'";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });


//PUNTO 2

// let sql = "SELECT mark_id, AVG(mark) FROM marks WHERE marks.date < '2020-12-31' || date > '2020-01-01'";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

//PUNTO 3

// let sql = "SELECT student_id, AVG(mark) FROM marks WHERE marks.student_id < '2020-12-31' GROUP BY student_id";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

/////////////////////////////////////////////////////////////////////////

//EJEMPLOS =>

// let sql = "SELECT first_name, last_name, mark FROM students JOIN marks ON (students.student_id = marks.student_id) WHERE date >= '2019-01-01'";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

// let sql = "SELECT first_name, last_name, mark FROM students INNER JOIN marks ON (students.student_id = marks.student_id)";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

// let sql = "SELECT first_name, last_name, mark FROM students LEFT JOIN marks ON (students.student_id = marks.student_id)";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });


// let sql = "SELECT first_name, last_name, mark FROM students RIGHT JOIN marks ON (students.student_id = marks.student_id)";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });


//<= EJEMPLOS

//RETO 1:

// let sql = "SELECT first_name, last_name, title FROM students JOIN marks ON (students.student_id = marks.student_id) JOIN subjects ON ( marks.subject_id = subjects.subject_id )";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

//RETO 2:

// let sql = "SELECT first_name, last_name, title FROM marks JOIN subjects ON (marks.subject_id = subjects.subject_id) JOIN subject_teacher ON ( subjects.subject_id = subject_teacher.subject_id ) JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id)";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });


// RETO 3:

// let sql = "SELECT COUNT(student_id), title, teachers.first_name, teachers.last_name FROM marks JOIN subjects ON(marks.subject_id = subjects.subject_id) JOIN subject_teacher ON (subjects.subject_id = subject_teacher.subject_id) JOIN teachers ON(teachers.teacher_id = subject_teacher.teacher_id) GROUP BY title";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });

//RETO 4:

// let sql = "SELECT teachers.first_name,teachers.last_name,subjects.title AS asignatura, AVG(marks.mark) FROM marks JOIN subjects ON (marks.subject_id = subjects.subject_id) JOIN subject_teacher ON (marks.subject_id = subject_teacher.subject_id) JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) GROUP BY asignatura";
// connection.query(sql, function (err, result)
// {
//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log("Dato insertado");
//         console.log(result);
//     }

// });


