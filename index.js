import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { format } from 'date-fns';

//configure the dotenv package
dotenv.config();

//initialization of express
const app = express();

//express default middlewares
app.use(express.json()) // used to access the body content/payload from client

app.use(cors());


// create port to run the server
const port = process.env.PORT || 4000;

//Default route to avoid cannot get
app.get("/", (req, res) => {
    res.status(201).send(
        `<h1 style="text-align:center;">Welcome to Backend Developer</h1>`
    );
});

//creating a server using http & nodejs


//Api to access the filesystem and performance operations
app.get('/file', (req, res) => {
    let today = format(new Date(), "dd-MM-yyyy-HH-mm-ss");
    // console.log(today);
    const filepath = `TimeStamp/${today}`;
    fs.writeFileSync(filepath, `${today}`, "utf-8")
    let data = fs.readFileSync(filepath, "utf-8")
    try {
        res.status(200).send(data);
    } catch (error) {
        res.status(503).json({message:"Failed to create a file"})
    }
})

//running server using expressjs
app.listen(port, () => {
    console.log("Server Started");
});

