const express = require('express')
const config = require('config')
const mongoClient = require('mongodb').MongoClient
const path = require('path')

const port = config.get('port')
const app = express()

app.use(express.json())

app.use('/api/data', require('./routes/data.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (_req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

async function start () {
  try {
    global.db = await mongoClient.connect(config.get('mongoUrl'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(port, () => console.log(`App has been started on port: ${port}`))
  } catch (err) {
    console.error('Server Error', err.message)
    process.exit(1)
  }
}

start()
