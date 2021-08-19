const express = require('express')
const app = express()

const baseDir = `${__dirname}/public/`
app.use(express.static(`${baseDir}`))

app.get('/', (req, res) => res.sendFile('index.html' , { root : baseDir } ))
app.get('favicon.ico', (req, res) => res.sendFile('favicon.ico', { root: baseDir }))

// export 'app'
module.exports = app