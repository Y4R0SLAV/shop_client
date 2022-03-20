const express = require("express")
const collectionRouter = require('./routes/collection.routes')
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', collectionRouter)


app.listen(PORT, () => console.log(`server started on post ${PORT}`))