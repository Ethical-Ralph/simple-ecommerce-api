const express = require("express");
const convert = require("./core");

const app = express()


app.use(express.json())
app.get("/", (req,res) => 
   res.end("welcome to my CSV to JSON app")
)

app.post("/convert", (req,res) => {
 try {
// const { csv } = req.body
//     if(!csv) {
//throw new Error("CSV params missing")
//}
const result = convert()
      res.json(result)
   } 
catch(e) {
   res.json({errors: {
      name:e.name,
    message: e.message
}
})
 }
}
)

app.listen(process.env.PORT, ()=>
   console.log("App live")
)
