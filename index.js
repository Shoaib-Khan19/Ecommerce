const app = require('./app');

//importing database function from config/db.js
const connectDatabase = require('./config/db');

//handling exceptions uncaughtException

process.on('uncaughtException', (e) => {
    console.log("Shutting Up Server due to Error: " + e.message);
});


if (process.env.NODE_ENV !== 'PRODUCTION') {
    //importing port object
    const dotenv = require('dotenv').config({ path: "./config/.env" });
}

/***Connecting Database */

connectDatabase();

/**** Starting Server */
const server = app.listen(process.env.PORT, () => { console.log("server is listening at port at http://localhost:" + process.env.PORT) })

//handling exceptions unhandledRejection

process.on("unhandledRejection", (e) => {
    console.log("Shutting Up Server due to Error: " + e.message);
    server.close(() => {
        process.exit(1);
    });
});


