const pool = require('../utils/postgres');

module.exports.create = (data) => {
  const bindings = [...data];
  const SQL_INSERT_CATEGORY = `INSERT INTO CATEGORY(PERSON, NAME, DESCRIPTION)
                              VALUES($1, $2, $3)`;
  return pool.query(SQL_INSERT_CATEGORY, bindings);
};

module.exports.findById = (data) => {
  const bindings = [...data];
  const SQL_SELECT_CATEGORY = `SELECT 
                                CATEGORY AS "category", 
                                NAME AS "name", 
                                DESCRIPTION AS "description" 
                              FROM CATEGORY WHERE CATEGORY = $2 AND PERSON = $1`;
  return pool.query(SQL_SELECT_CATEGORY, bindings);
};

module.exports.fetchAll = (data) => {
  const bindings = [...data];
  const SQL_SELECT_CATEGORIES = `SELECT 
                                  CATEGORY AS "category", 
                                  NAME AS "name", 
                                  DESCRIPTION AS "description" 
                                FROM CATEGORY WHERE PERSON = $1`;
  return pool.query(SQL_SELECT_CATEGORIES, bindings);
};
