const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const db = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


// create
app.post('/insert', async(request, response) => {
    const { name } = request.body;

    const result = await db.insertNewName(name);

    return response.status(200).json({data : result});
});

// read
app.get('/getAll', async(request, response) => {

    const result = await db.getAllData();
    
    return response.status(200).json({data : result});
})

// update
app.post('/update', async(request, response) => {
    const { id, name } = request.body;

    const result = await db.updateNameById(id, name);
    
    return response.status(200).json({data : result});

});

// delete
app.post('/delete', async(request, response) => {
    const { id } = request.body;

    const result = await db.deleteRowById(id);
    return response.status(200).json({data : result});
});

app.post('/search', async(request, response) => {
    const { name } = request.body;
    const result = await db.searchByName(name);
    return response.status(200).json({data : result});


})

app.listen(5000, () => console.log('app is running on port' + 5000));