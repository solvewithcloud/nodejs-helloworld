const app = require("express")()
require('dotenv').config()

const port = process.env.PORT

if (port == undefined){
    console.log("Port is not defined")
    process.exit()
}

app.get("/", (req,res) => {
    console.log("/ GET")
    res.send("Hello world\n")
})

app.listen(port, console.log(`Server running on port ${port}`))