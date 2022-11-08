const express = require('express');
const { server } = require('./src/config/config');
const app = express();
const cors = require('cors');
const cookies = require('cookie-parser');
const guard = require('./src/guard/guard');

const personInfo = require('./src/routes/person_info');
const personRoutes = require('./src/routes/person');
const categoryRoutes = require('./src/routes/category');
const invalidRoutes = require('./src/routes/404');

app.use(cors({ origin: true, credentials: true }));
app.use(cookies());
app.use(express.json());

app.use(personRoutes);

app.use(guard);

app.use(personInfo);
app.use(categoryRoutes);
app.use(invalidRoutes);

app.listen(server.port, () => {
  console.log(`Server running on port: ${server.port}`);
});
