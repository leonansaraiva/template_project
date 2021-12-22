
const config = require('../../knexfile')

const knex = require('knex')(config)

module.exports = knex

//comandos
// knex migrate:make create_table_users
// knex migrate:latest
// knex migrate:rollback
// knex migrate:make add_deleted_at_table_users_
// knex migrate:latest
