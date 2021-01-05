let express = require("express")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.js')
const userRouter = require('./router')
require("dotenv").config()

let app = express()
app.use(express.json())

app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use('/docs', swaggerUi.serve,swaggerUi.setup(swaggerDocument));



app.use('/api/v1',userRouter)


app.listen(6543, () => {
    console.log("Connect To server....",6543)
}) 