const fs = require('fs');
const colors = require('colors');

let todoList = [];

const create = (description, completed = false) => {
    load();
    let todo = {
        description: description,
        completed: completed
    }
    todoList.push(todo);
    save();
    return todo;
};

const update = (desc, completed) => {
    load();
    let index = todoList.findIndex(x => x.description === desc);
    if (index >= 0) {
        todoList[index].description = desc;
        todoList[index].completed = completed;
        save();
        return true;
    } else {
        return false;
    }
}

const remove = (desc) => {
    load();
    let index = todoList.findIndex(x => x.description === desc);
    if (index > -1) {
        todoList.splice(index, 1);
        save();
        return true;
    } else {
        return false;
    }
}

const save = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Saved'.white)
        }
    })
}

const load = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }

}

const list = () => {
    load();
    return todoList;
}

module.exports = {
    create,
    list,
    update,
    remove
}
