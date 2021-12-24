const app = require('./app')

const PORT =  8080

app.listen(PORT, () => {
    console.log(`Servido listening on port ${PORT}`)
})