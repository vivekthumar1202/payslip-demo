
/**
* @author Vivek Thumar <vivekthumar1202@gmail.com>
* @description Connect to the database(Mongo).
*/
const mongoose = require('mongoose');

module.exports = {
  connect: async () => {
    const url = process.env.MONGO_URL;
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
  },
  disconnect: async () => mongoose.disconnect(),
  mongoose,
};
