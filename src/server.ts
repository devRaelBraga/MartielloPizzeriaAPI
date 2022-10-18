import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import * as dotenv from "dotenv";
dotenv.config({ path: '../.env' });



const app = express();

app.use(cors());
app.use(express.json());


app.use(routes);

app.get('/funcionario', function(req, res){
    res.status(201).json({
        "id_funcionario": process.env.USER
    })
})

app.listen(3005, () => console.log("Server running on port 3005"));