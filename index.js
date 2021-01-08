const express = require("express");
const convert = require("./Newinters");

const app = express()


app.use(express.json())
app.get("/", (req,res) => 
   res.end("welcome to my CSV to JSON app”)
)

app.post("/convert", (req,res) => {
  const { csv: { url, select_fields }} = req.body
  const result = convert(url)
  res.json(result)
}


app.listen(process.env.PORT, ()=>
   console.log("App live")
