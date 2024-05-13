const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path=require("path")

const authRoutes = require("./Routes/auth.routes");
const messageRoutes = require("./Routes/message.routes");
const userRoutes=require("./Routes/user.routes")

const conectToMongoDb = require("./Db/db");
const { app, server } = require("./Socket/socket");

const port = process.env.PORT || 5008;

if (!__dirname) {
  const path = require('path');
  const __dirname = path.resolve();
}

dotenv.config();

// to parse the incoming request with JSON payloads (from req.body)
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRoutes);


app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

// app.use(express.static(path.join(__dirname,"Front-end","dist")))
 
// app.get("*",(req,res)=>{
//   res.sendFile(path.join(__dirname,"Front-end","dist","index.html"))
// })



// __dirname is 'C:\Users\Karthi\Desktop\Chat-Application\Chat-Application\Back-end'
const newDirname = path.dirname(__dirname); // This will return 'C:\Users\Karthi\Desktop\Chat-Application\Chat-Application'


const staticPath = path.join(newDirname, 'Front-end', 'dist');
app.use(express.static(staticPath));

app.get('*', (req, res) => {
  const indexPath = path.join(staticPath, 'index.html');
  res.sendFile(indexPath);
});

// app.get("/",(req,res)=>{
//  res.send("Server is ready")
// })

server.listen(port, () => {
  conectToMongoDb();
  console.log(`Server is running on port ${port}`);
  console.log(newDirname)
});
