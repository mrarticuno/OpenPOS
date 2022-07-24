const app = require('./app')

app.listen(process.env.PORT || 3000, process.env.HOST || '0.0.0.0', () => {
  console.log(`API Running on port 3000 on localhost`)
})
