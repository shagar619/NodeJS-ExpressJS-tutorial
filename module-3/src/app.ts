import express, { Application, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
const app: Application = express();

app.use(express.json());

const todosRouter = express.Router();
const userRouter = express.Router();

app.use('/todos', todosRouter);
app.use('/users', userRouter);



app.get('/', (req: Request, res: Response) => {
    res.send('The server is running on port 5000!');
});


app.post('/todo/create-todo', (req: Request, res: Response) => {
    const { title, body } = req.body;
    console.log(`Title: ${title}, Body: ${body}`);
    res.send('Todo created successfully!');
});

export default app;


// [app]-[express.json()]-[todosRouter]-[Root Route "/"]-[GET "/todos"]-[POST Create ToDo]
//[todosRouter]-[get all todos /todos GET]-[create todo /todos/create-todo POST todo]


/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */