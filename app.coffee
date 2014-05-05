express = require('express')
path    = require('path')

app = express()

app.configure ->
  app.set 'port', process.env.PORT || 8080
  app.use express.static(path.join(__dirname, 'public'))

app.listen(app.get('port'))
console.log "Listening on port #{app.get('port')}"
