// server.js
const app = require('./app');
const envConfig = require('./config/envConfig');


app.listen(envConfig.PORT, () => {
  console.log(`Server running on http://localhost:${envConfig.PORT}`);
});
