// Update with your config settings.
require('dotenv').config();
const path = require("path");
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const {dbName, dbUser, dbPassword, dbHost} = process.env

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            database: 'tictactoe',
            user: 'tictactoe',
            password: '859694',
            host: 'localhost',
            port: 5432,
        },
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
    },

    /*staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }*/

};