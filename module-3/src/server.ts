
import app from "./app";
import { client } from "./config/mongodb";



let server;

const port = 5000;

// connect mongoDB





const bootstrap = async () => {
    await client.connect();
    console.log("Connected to MongoDB");

    server = app.listen(port, () => {
        console.log(`Module 3 is running on port ${port}`);
    });
}

bootstrap();