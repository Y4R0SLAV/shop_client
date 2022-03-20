const express = require("express")
const collectionRouter = require('./routes/collection.routes')
const typeRouter = require('./routes/type.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', collectionRouter)
app.use('/api', typeRouter)

app.listen(PORT, () => console.log(`server started on post ${PORT}`))