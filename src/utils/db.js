const mongoose = require('mongoose');

exports.connectToDB = () => {
  const { DB_HOST, DB_PORT, DB_DATABASE } = process.env;
  // mongoose.set('debug', true);
  const connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

  console.log(`Connecting to ${connectionString}`);
  mongoose.set('useFindAndModify', false);
  const db = mongoose.connection;
  db.on('connected', () => {
    console.log('DB connected');
  });
  db.on('error', (error) => {
    console.log('DB connection failed');
    console.error(error.message);
    process.exit(1);
  });
  db.on('disconnected', () => {
    console.log('mongoose connection is disconnected');
  });

  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};
