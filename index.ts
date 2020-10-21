import app from './app.js'

app.listen(3000, () => {
  console.log('App listening on 3000')
})

app.get('/', async (req, res) => {
  res.send('Hello world')
})
