let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: null,
    database: "museo"
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexion correcta")
    }
    
});



