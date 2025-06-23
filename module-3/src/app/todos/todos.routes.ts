import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const todosRouter = express.Router();

const filePath = path.join(__dirname, '../db/todo.json');

todosRouter.get('/', (req: Request, res: Response) => {
    
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });


    res.json(JSON.parse(data));
});
