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

//GET api/v1/people
app.get('/api/v1/people', peopleController.getAllPeople)

// GET '/' parameter
app.get('/', peopleController.getPeoplebyParams)

//POST api/v1/people
app.post('/api/v1/people', peopleController.postPeople)  

//PUT
app.put('/api/v1/people/:id', peopleController.putPeople)

//DELETE api/v1/people/:id
app.delete('/api/v1/people/:id', peopleController.deletePeople)

//Database query
app.get('/database',getDatabase.getDatabasereq)

//SERVER
  app.listen(8081, () => {
    console.log('Server started on port 8081');
});
