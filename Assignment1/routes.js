const fs = require('fs')

const responseHandler = (req, res) => {
  const url = req.url

  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>My Page!!</title></head>')
    res.write('<body>')
    res.write('<h1>Hello World!!</h1>')
    res.write('<form action="/user" method="POST">')
    res.write('<input type="text" name="message">')
    res.write('<button type="submit">Send')
    res.write('</button></form>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  } else if (url === '/user' && req.method === 'POST') {
    const body = []
    req.on('data', (chunck) => {
      console.log(chunck)
      body.push(chunck)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFileSync('message.txt', message)
    })
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
}

module.exports = responseHandler
