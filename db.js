const { MongoClient } = require("mongodb");

async function dbConnection() {
    const connectionString = "mongodb+srv://sanjay:sanjay2023@cluster0.tjzm3y1.mongodb.net/?retryWrites=true&w=majority";

    try {
        const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log("Connected to the database");
        return client;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}

module.exports = dbConnection;
