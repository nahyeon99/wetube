import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    /* mongod msg error add code */
    "mongodb://127.0.0.1:27017/whatever",{
    ignoreUndefined: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
    },
    /******************************/
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = (error) => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
