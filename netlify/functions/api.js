const { app } = require("../../connection/server");
const serverless = require("serverless-http");
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
module.exports.handler = serverless(app);
