const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const authRoutes = require("./Routes/auth.routes");
const messageRoutes = require("./Routes/message.routes");
const userRoutes=require("./Routes/user.routes")

const conectToMongoDb = require("./Db/db");
const { app, server } = require("./Socket/socket");

const port = process.env.PORT || 5008;

dotenv.config();

// to parse the incoming request with JSON payloads (from req.body)
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRoutes);

app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

// app.get("/",(req,res)=>{
//  res.send("Server is ready")
// })

server.listen(port, () => {
  conectToMongoDb();
  console.log(`Server is running on port ${port}`);
});
