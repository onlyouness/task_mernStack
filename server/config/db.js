const mongoose = require("mongoose");

const connection = (url) => {
    console.log("db log url: ",url);
    return mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
}
module.exports = connection;
