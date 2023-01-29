import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import connectDB from "./config/database";
import user from "./routes/api/user";

const app: Express = express();

// Connect to MongoDB
connectDB();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))
const port = 8001;

app.use("/api/user", user);

// app.get("/", (req: Request, res: Response) => {
// 	res.send("Express + ss Server");
// });

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
