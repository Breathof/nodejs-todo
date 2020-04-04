let options = {
    description: {
        demand: true,
        alias: 'd'
    },
    completed: {
        alias: 'c',
        default: true
    }
}
const argv = require('yargs')
    .command('create', 'Create a task', options)
    .command('update', 'Update a task', options)
    .command('delete', 'Delete a task', {
        description: {
            demand: true,
            alias: 'd'
        }
    })
    .argv;

module.exports = {
    argv
}