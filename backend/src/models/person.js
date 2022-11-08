const pool = require('../utils/postgres');

module.exports.register = (data) => {
  const bindings = [...data];
  const SQL_REGISTER_PERSON = `INSERT INTO PERSON(EMAIL, PASSWORD, PERSON_TOKEN, FIRST_NAME, LAST_NAME)
                                VALUES($1, $2, API_TOKEN(TO_CHAR(CURRENT_TIMESTAMP, 'DD-MM-YYYY HH24:MI:SS') || $2), $3, $4)
                                RETURNING PERSON_TOKEN`;
  return pool.query(SQL_REGISTER_PERSON, bindings)
};

module.exports.hashpassword = (data) => {
  const bindings = [...data];
  const SQL_HASH_PASSWORD = `SELECT PASSWORD FROM PERSON WHERE EMAIL = $1`;
  return pool.query(SQL_HASH_PASSWORD, bindings);
};

module.exports.login = (data) => {
  const bindings = [...data];
  const SQL_LOGIN_PERSON = `UPDATE PERSON
                              SET
                                PERSON_TOKEN = (SELECT * FROM API_TOKEN(TO_CHAR(CURRENT_TIMESTAMP, 'DD-MM-YYYY HH24:MI:SS') || $2)),
                                MOD_DATE = CURRENT_TIMESTAMP
                              WHERE EMAIL = $1
                            RETURNING PERSON_TOKEN, FIRST_NAME, LAST_NAME`;
  return pool.query(SQL_LOGIN_PERSON, bindings);
};
