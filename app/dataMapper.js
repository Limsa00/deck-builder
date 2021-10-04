const database = require('./database');

const dataMapper = {

  getAllCards: function (callback) {
    const query = {
      text : `SELECT * FROM "card"`
    };
    database.query(query, callback);
  },

  getOneCard: (id, callback) => {
    database.query (`SELECT * FROM card WHERE id = $1;`, [id], (error,result)=>{
      if (result) {
        callback(error, result.rows[0]);
      } else {
        callback(error,null);
      }
    })
  },

  findByElement: (element, callback) =>{
    let sql = `SELECT * FROM card WHERE element = $1;`;
    let values = [element];

    if (element === 'null') {
      sql = `SELECT * FROM "card" WHERE "element" IS NULL`;
      values = [];
    }

    database.query( sql, values, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data.rows);
      }
    });
  },

  findByLevel:(level, callback)=>{
    let sql = `SELECT * FROM card WHERE level = $1;`;
    
    database.query(sql, [level], (err,data)=>{
      if (err) {
        callback(err, null);
      } else {
        callback(null, data.rows);
      };
    });
  }
}
  module.exports = dataMapper;