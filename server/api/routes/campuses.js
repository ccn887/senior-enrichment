const campusRouter = require('express').Router()
const db = require('../../db')
const Campus = require('../../db/models/campus')

campusRouter.get('/', (req, res) => {
  console.log("trying to get campuses")
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(err => res.error(err))
});

campusRouter.get('/:id', (req, res) => {
  Campus.findOne({
    where: {
      id: +req.params.id
    }
  })
  .then(campus => res.json(campus))
  .catch(err => res.error(err))
})

campusRouter.post('/campuses', (req, res) => {
  Campus.create({
    name: req.body.name,
    imgUrl: req.body.imgUrl,
    description: req.body.description
  })
  .then(campus => res.json(campus))
  .catch(err => res.error(err))
})

campusRouter.put('/:id', (req, res) => {
 Campus.findOne({
    where: {
      id: +req.params.id
    }
  })
  .then(campus =>{
    campus.update({
      name: req.body.name,
      imgUrl: req.body.imgUrl,
      description: req.body.description
    })
  })
  .then(result => res.json(result))
  .catch(err => res.error(err))
})
campusRouter.delete('/:id', (req, res) => {
  Campus.findOne({
     where: {
       id: +req.params.id
     }
   })
   .then(campus => {
     return campus.destroy({force: true})
     })
   .then((result)=> res.json('this record no longer exists'))
   .catch(err => res.error(err))
 })

module.exports = campusRouter
