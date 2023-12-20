import express, { Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from 'cookie-parser';

import DBMongoose from "./config/index"
import { userRouter } from "./routes/user.route"
import { serviceRouter } from "./routes/service.route"
import { postRouter } from "./routes/post.route"
dotenv.config()
DBMongoose()
const app = express()

const port = 5000

app.get("/", (req: Request, res: Response) => {
    res.send("Hello Anh Dev!")
})

app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use("/api/v1",userRouter)
app.use("/api/v1",serviceRouter)
app.use("/api/v1",postRouter)
app.listen(port, () => {
    return console.log(`Express is listening on port: ${port}!`)
})