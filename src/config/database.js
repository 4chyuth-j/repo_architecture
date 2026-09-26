const mongoose = require('mongoose');


class DatabaseConfig{
    static async connect(){
        try {
            const mongoURI = process.env.MONGO_URI;
            if(!mongoURI){
                throw new Error("MongoDB connection URI is not defined in env");
            }

            const options = {
                maxPoolSize: 10,
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000,
            }

            await mongoose.connect(mongoURI,options);
            console.log("-------Connected to mongoDB------");

        } catch (error) {
            console.log("failed to connect to MongoDb:",error.message);
            process.exit(1);
        }
    }

    static async disconnect(){
        try {
            await mongoose.disconnect();
            console.log("MongoDB disconnected Successfully");
        } catch (error) {
            console.log(`Error disconnecting from MongoDB:${error}`);
        }
    }
}

module.exports = DatabaseConfig;