import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-xmdbrlw-shard-00-00.srg8abc.mongodb.net:27017,ac-xmdbrlw-shard-00-01.srg8abc.mongodb.net:27017,ac-xmdbrlw-shard-00-02.srg8abc.mongodb.net:27017/?ssl=true&replicaSet=atlas-fc5ag5-shard-0&authSource=admin&retryWrites=true&w=majority`; 
    try{
        mongoose.connect(DB_URI);
        mongoose.set('strictQuery', false);
        console.log("Database connected successfully!");
    } catch(err) {
        console.log("Error while connecting with the database ", err.message);
    }
}

export default Connection;
