"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todosRouter = express_1.default.Router();
const userRouter = express_1.default.Router();
app.use('/todos', todosRouter);
app.use('/users', userRouter);
app.get('/', (req, res) => {
    res.send('The server is running on port 5000!');
});
app.post('/todo/create-todo', (req, res) => {
    const { title, body } = req.body;
    console.log(`Title: ${title}, Body: ${body}`);
    res.send('Todo created successfully!');
});
exports.default = app;
// [app]-[express.json()]-[todosRouter]-[Root Route "/"]-[GET "/todos"]-[POST Create ToDo]
//[todosRouter]-[get all todos /todos GET]-[create todo /todos/create-todo POST todo]
/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */ 
