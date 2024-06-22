const mongoose = require('mongoose');

const connectDB = (MONGO_URL) => {
  mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
};

module.exports = { connectDB };
