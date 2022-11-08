const Person = require('../models/person');
const bcrypt = require('bcryptjs');

module.exports.registerPerson = async (req, res, next) => {
  const args = [
    req.body.email,                         // email
    bcrypt.hashSync(req.body.password, 8),  // password
    req.body.first_name,                    // first_name
    req.body.last_name,                     // last_name
  ];
  try {
    const outBinds = await Person.register(args);
    const person_token = outBinds.rows[0].person_token;
    res
      .status(200)
      .cookie('auth_token', person_token, {
        sameSite: 'none',
        secure: true,
        expires: new Date(2147483647 * 1000),
      })
      .json({
        messsage: 'Person was registered successfully!',
        data: [
          {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            auth_token: person_token,
          },
        ],
      });
  } catch (error) {
    res
      .status(400)
      .clearCookie('auth_token', { sameSite: 'none', secure: true })
      .json({ messsage: error });
  }
};

module.exports.loginPerson = async (req, res, next) => {
  let args = [
    req.body.email,   // email
    req.body.password // password
  ];
  try {
    const query_result = await Person.hashpassword([req.body.email]);
    const hashpassword = query_result.rows[0].password

    if (hashpassword.length > 0) {
      if (bcrypt.compareSync(args[1], hashpassword)) {
        // DB Login
        args = [ 
          args[0],      // email
          hashpassword  // password
        ];

        const query_result = await Person.login(args);
        const person_token = query_result.rows[0].person_token;
        const first_name = query_result.rows[0].first_name;
        const last_name = query_result.rows[0].last_name;

        return res
          .status(200)
          .cookie('auth_token', person_token, {
            sameSite: 'none',
            secure: true,
            expires: new Date(2147483647 * 1000),
          })
          .json({
            messsage: 'Login Successfully',
            data: [
              {
                first_name: first_name,
                last_name: last_name,
                auth_token: person_token,
              },
            ],
          });
      }
    }
    res
      .status(403)
      .clearCookie('auth_token', { sameSite: 'none', secure: true })
      .json({ messsage: 'Invalid credentials' });
  } catch (error) {
    res
      .status(400)
      .clearCookie('auth_token', { sameSite: 'none', secure: true })
      .json({ messsage: error });
  }
};
