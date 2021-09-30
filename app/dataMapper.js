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
  }
  
};


module.exports = dataMapper;