const express = require("express");
const convert = require("./core");

const app = express()


app.use(express.json())
app.get("/", (req,res) => 
   res.end("welcome to my CSV to JSON app")
)

app.post("/convert", (req,res) => {
 const { csv: { url, select_fields }} = req.body
  try {
     const result = convert(url)
      res.json(result)
   } 
catch(e) {
res.json({errors:e})
 }
}
)

app.listen(process.env.PORT, ()=>
   console.log("App live")
)
