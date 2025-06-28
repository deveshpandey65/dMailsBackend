const express = require("express");
const app = express();
app.listen(5000, () => {
    console.log("Server is running on port 3001");

}
)
const cors = require("cors");
app.use(cors());
app.use(express.json());
module.exports = app;
