import "dotenv/config";
import express, { NextFunction, Request, Response, } from "express";
import noteRoutes from "./routes/notes";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/notes", noteRoutes);

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An unknown error occurred";
    let statusCode = 500;
    if(isHttpError(error)) {
        errorMessage = error.message;
        statusCode = error.status;
    }

    res.status(statusCode).json({ error: errorMessage });
});

export default app;