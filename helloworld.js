const express = require('express')

const app = express()

app.get('/', (req, res)=> {
  var content = `
    <h1>routing practice</h1>
    <ul>
      <li><a href="/topic/HTML/Steve">HTML, Steve</a></li>
      <li><a href="/topic/CSS/Tom">CSS, Tom</a></li>
      <li><a href="/topic/NodeJS/xyz">NodeJS, xyz </a></li>
    </ul>

  `
  res.send(content);

})

app.get('/topic/:topic/:name', (req, res) => {
  var content='';
  content = content + req.path + ', ' + req.params.topic+ ', ' + req.params.name;
  console.log(content);
  res.send(content)
})

app.listen(3000, () => console.log('Example app is listening on port 3000!'))
