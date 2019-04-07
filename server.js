const express = require('express');
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
//template engine
app.set('view engine', 'ejs');
//static public
app.use(express.static(__dirname + '/public'));

var data = [{
    nama: "kemal",
    alamat: "bandung",
    kelas: "5a"
  },
  {
    nama: "avi",
    alamat: "jakarta",
    kelas: "7a"
  },
  {
    nama: "april",
    alamat: "bekasi",
    kelas: "9a"
  }
]


app.post('/simpan', (req,res) => {

  data.push({
    nama : req.body.nama,
    alamat :req.body.alamat,
    kelas : req.body.kelas
  })
  console.log(data);
  res.redirect('/')

})
app.get('/', (req, res) => {
  res.render('index.ejs', {
    namaSaya: 'admin',
    kelas : 'xxx'
  })
})

app.get('/data', (req, res) => {
  res.send(data)
})


app.listen('8000', () => {
  console.log('run in port 8000');
})
