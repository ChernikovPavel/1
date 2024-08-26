const express = require('express');
require('dotenv').config()
const allRouters = require('./routers/api')
app = express()
app.use('/api', allRouters)

app.listen(process.env.PORT, () => {console.log('Server started on ' + process.env.PORT)})