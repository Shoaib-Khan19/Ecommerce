const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("Database Connected");
        })
        .catch((error) => {
            console.log("Error Database Not Connected:", error.message);
        });
}

module.exports = connectDatabase