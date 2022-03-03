const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('src'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html')
})

app.listen(process.env.PORT || 3000)
