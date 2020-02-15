const express = require("express")
const cors = require("cors")
const axios = require('axios')
const path = require("path")
let oneYear = 1 * 365 * 24 * 60 * 60 * 1000;

const app = express()
app.use(cors())
if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
    
    app.get("*", (req, res)=> {
        res.sendFile(path.resolve(__dirname, "client","build", "index.html"), {maxAge:oneYear})
    })
}

const PORT =process.env.PORT || 4000
app.listen(PORT, () =>console.log(`Listening ON PORT ${PORT}`))
