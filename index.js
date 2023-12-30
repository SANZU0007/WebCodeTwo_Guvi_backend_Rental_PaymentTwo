let express = require("express");
let app = express();
let cors = require("cors");
let dotenv = require("dotenv");
const imagesRouter = require("./routes");
const dbConnection = require("./db");
const port = process.env.PORT || 9000;
dotenv.config()
app.use(express.json());
app.use(cors());

dbConnection()

app.use("/", imagesRouter);


app.listen(port, () => {
    console.log("Server is ready," ,port);
});
