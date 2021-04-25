const express = require('express')
const axios = require('axios')
const app = express()
const port = process.env.PORT

app.get('/api/random', async (req, res) => {
  const apiRes = await axios.get("http://www.themealdb.com/api/json/v1/1/random.php")
  res.send(apiRes.data);
});

app.use(express.static("public"));

app.get('/api/search', async (req, res) => {
  const apiRes = await axios.get(`http://www.themealdb.com/api/json/v1/1/search.php?s=${req.query.s}`)
  res.send(apiRes.data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})