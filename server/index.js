require('dotenv').config()
const express = require("express")
const cors = require("cors")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")

const router = require("./routes/index")

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

// Обработка ошибок, последний миддлвеер
app.use(errorHandler)

app.listen(PORT, () => console.log(`server started on post ${PORT}`))