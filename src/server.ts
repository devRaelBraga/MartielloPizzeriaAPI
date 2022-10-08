import express from 'express';
import { routes } from './routes';
import cors from 'cors';



const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.get('/users', function(req, res){
    res.status(201).json({
        name: "hisrael"
    })
})

app.listen(3005, () => console.log("Server running on port 3005"));