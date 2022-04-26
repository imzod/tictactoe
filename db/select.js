const knexConfig = require("../knexfile");

const knex = require('knex')(knexConfig);

function getget () {
  return knex.select('*').from('users').then(function(rows) {
    console.log(rows);
  });
}

