const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 7800


app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.status(200).json({
        email: 'Emmanson109@gmail.com',
        currentDateTime: new Date().toISOString(),
        github_url: 'https://github.com/Emmanson109/RETURN-JSON-API.git'

    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})