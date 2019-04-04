/* eslint-disable no-console */

// item-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.

module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'item';
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increment('id');
        table.string('name');
        table.string('desc');
        
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });
 


  return db;
};
