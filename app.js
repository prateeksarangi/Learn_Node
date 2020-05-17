const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers)

  const url = req.url
  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>My Page!!</title></head>')
    res.write('<body>')
    res.write('<h1>Hello World!!</h1>')
    res.write('<form action="/message" method="POST">')
    res.write('<input type="text"><button type="submit">Send')
    res.write('</button></form>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }
  else if (url === '/message' && req.method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY')
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My Page!!</title></head>')
  res.write('<body>')
  res.write('<h1>Hello World-2!!</h1>')
  res.write('</body>')
  res.write('</html>')
  res.end()
  process.exit()
})

server.listen(3000)
