import app from "./app";
import env from "./utill/validateEnv"
import mongoose from "mongoose";

const port = env.PORT ? env.PORT : 5000;

mongoose.connect(env.MONGODB_URL)
    .then(() => {
        console.log("Mongoose connected");
        app.listen(port, () => {
            console.log("Server running on port: " + port);

        });
    })
    .catch(console.error);
