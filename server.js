import ejs from 'ejs';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.set('view engine', 'ejs');
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

let todos= [];
let workTodos = [];

app.get('/', (req, res) => {
    res.render('index.ejs', { todos });
})

app.post('/submit', (req, res) => {
    const newTodo = req.body.todo;
    todos.unshift(newTodo);
    res.redirect('/');
})

app.post('/delete', (req, res) => {
    const index = req.body.index;
    todos.splice(index, 1);
    res.redirect('/');
})

app.get('/work', (req, res) => {
    res.render('work.ejs', { workTodos });
})

app.post('/work/submit', (req, res) => {
    const newWorkTodo = req.body.workTodo;
    workTodos.unshift(newWorkTodo);
    res.redirect('/work');
})

app.post('/work/delete', (req, res) => {
    const workIndex = req.body.workIndex;
    workTodos.splice(workIndex, 1);
    res.redirect('/work');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})