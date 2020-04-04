const { argv } = require('./config/yargs');
const todo = require('./todo/todo');
const colors = require('colors');


let command = argv._[0];

switch (command) {
    case 'create':
        console.log(todo.create(argv.description, argv.completed))
        break;
    case 'list':
        let todoList = todo.list();
        todoList.forEach(task => {
            console.log('======TODO:======='.white);
            console.log(task.description);
            console.log(task.completed);
            console.log('=================='.white);
        })
        break;
    case 'update':
        let updated = todo.update(argv.description, argv.completed);
        console.log(updated);
        break;
    case 'delete':
        let result = todo.remove(argv.description);
        console.log(result);
        break;
    default:
        break;
}