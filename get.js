const express = require('express');
const app = express();
const cors = require('cors')
const peopleController = require('./Controller/peopleController')
var pool = require('./Model/database')
var getDatabase = require('./Model/database')

app.use(
    cors({
    origin:"*",
    methods:["GET","POST","PUT","DELETE"]
})) 

app.use(express.json()) //Middleware

//GET api/v1/people (File System)
app.get('/api/v1/people', peopleController.getAllPeople)

// GET '/' parameter (File System)
app.get('/', peopleController.getPeoplebyParams)

//POST api/v1/people (File System)
app.post('/api/v1/people', peopleController.postPeople)  

//PUT (File System)
app.put('/api/v1/people/:id', peopleController.putPeople)

//DELETE api/v1/people/:id (File System)
app.delete('/api/v1/people/:id', peopleController.deletePeople)

//Database API
//GET '/database'
app.get('/database',peopleController.getDatabasereq)

//GET '/'
app.get('/db',peopleController.dbgetPeoplebyParams)

//POST '/database/post'
app.post('/databse/post',peopleController.dbPostReq)

//PUT '/update/:id'
app.put('/database/update/:id',peopleController.dbPutReq)

//DELETE '/delete/:id'
app.delete('/database/delete/:id',peopleController.dbDeleteReq)

//SERVER
  app.listen(8081, () => {
    console.log('Server started on port 8081');
});
