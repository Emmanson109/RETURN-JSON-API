const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 7800


app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.json({
        email: 'Emmanson109@gmail.com',
        currentDateTime: new Date().toISOString(),
        github_url: 'https://github.com/emmanson109'

    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})