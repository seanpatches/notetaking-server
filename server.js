require('dotenv').config();
console.log(require('dotenv').config());
require('./lib/utils/connect')();
const app = require('./lib/app');

const PORT = process.env.PORT || 8889;

app.listen(PORT, () => {
  console.log(`connect at ${PORT}`);
});
