import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT ;

app.get('/', (req: Request, res: Response) => {
  res.json({
    "status" : 200,
    "message" : "Berhasil"
  });
});

app.get('/about', (req:Request, res:Response) => {
    res.json({
        "status" : 200,
        "message" : "Berhasil About"
    })
})

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});