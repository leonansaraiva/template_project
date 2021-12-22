const app = require('express')()
const middlewares = require('../src/config/middlewares')
const routes = require('./config/routers');


app.use(middlewares.bodyParser)
app.use(middlewares.cors)
app.use(routes);

const PORT =  8081

app.listen(PORT, () => {
    console.log(`Servido listening on port ${PORT}`)
})
