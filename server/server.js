//import and set up app
import express from 'express'
import giftRouter from './routes/gifts.js';

const app = express();

const port = process.env.PORT || 3000;

// server.js
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get('/gift/:id', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'public/gift.html'));
});
//Middleware
app.use(express.static('./public'))
//app.use("/public", express.static('./public'))

//app.use("/scripts", express.static('./public/scripts'))

app.use("/gifts", giftRouter)

app.use("/", (req, res) => {
    res.status(200).send(
        '<h1 style = "text-align: center; margin-top: 50px;">UnEarthed API </h1>')
})



app.listen(port, ()=> {
    console.log(`Listening on port https://localhost:${port}`);
})

