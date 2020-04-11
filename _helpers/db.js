const mongoose = require('mongoose');
const config = require('../config.json');
mongoose.connect(process.env.MONGODB_URI || config.connectionString,
    { useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true, 
      useCreateIndex: true
    });
      mongoose.Promise = global.Promise;

      mongoose.connection
        .on('open', () => console.info('Database connected !!'))
        .on('error', err => console.info('DB connection error..!!'))

module.exports = {
    User: require('../users/user-model')
};