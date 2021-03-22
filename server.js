require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.json({
        msg: 'Selam'
    })
})

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex : true,
    useFindAndModify:false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Mongo DB bağlandı.")
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server http://localhost:${port}/'dan çalışıyor..`)
})