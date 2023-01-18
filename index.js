import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js"

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Server is runing on port http://localhost:${PORT}`));

app.use('/users',userRoutes)

//GET
app.get('/',(req,res) => {
    console.log('Test!');

    res.send('hello from homepage')
});
