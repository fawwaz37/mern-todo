const mongoose = require('mongoose')

function connectMongoDb() {
    mongoose.connect('mongodb+srv://zekais:pass12345@cluster0.4jypx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('[INFO] Connect to DB success!');
    });
};

module.exports = { connectMongoDb }