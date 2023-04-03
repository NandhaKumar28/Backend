var mysql = require('mysql');

var pool = mysql.createPool({
    host:"db4free.net",
    user:"react123",
    password:"reactroot",
    database:"nodedatabase123",
    connectionLimit:100,
    multipleStatements:true
})

module.exports = {
    pool: pool,
    getDatabasereq:function(req,res){
        pool.query("CALL spGetPeople()",function(error,result){
            if(error){
                res.send(error)
            }else{
                res.send(result)
            }
        })
    }
}    