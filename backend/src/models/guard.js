const pool = require('../utils/postgres');

module.exports.verifyPersonToken = (data) => {
  const bindings = [...data];
  const SQL_SELECT_PERSON = `SELECT
                              PERSON AS "person",
                              EMAIL AS "email",
                              FIRST_NAME AS "first_name",
                              LAST_NAME AS "last_name"
                            FROM PERSON
                            WHERE PERSON_TOKEN = $1`;
  return pool.query(SQL_SELECT_PERSON, bindings);
};
