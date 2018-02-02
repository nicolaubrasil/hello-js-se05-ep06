// index.js
const cfg = require("./knexfile")
const knex = require("knex")(cfg.development)
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const app = express()

app.use(express.static("public"))

app.use(morgan("dev"))

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/listpessoas", (req, res) => {
  knex("pessoas").select().then(ret => {
    res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

app.get("/pessoa/:id", (req, res) => {
  let id = req.params.id

  knex("pessoas").select().where('id', id).then(ret => {
    res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

app.post("/addpessoa", (req, res) => {
  const pessoa = req.body
  knex("pessoas").insert(pessoa, "id").then(ret => {
      res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

app.delete("/pessoa/del/:id", (req, res) => {
  let id = req.params.id

  knex("pessoas").where('id', id).del().then(ret => {
    console.log('deletou')
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })

})

app.put("/pessoa/update/:id", (req, res) => {
  let id = req.params.id
  const pessoa = req.body

  knex("pessoas").where('id', id)
  .update(pessoa).then(ret => {
    console.log('deletou')
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })


})

knex.migrate.latest().then(_ =>
  app.listen(3000, _ =>
    console.log("server online!")))