const campusRouter = require('express').Router()
const db = require('../../db')
const Campus = require('../../db/models/campus')
const Student = require('../../db/models/student')

campusRouter.get('/', (req, res) => {
  Campus.findAll({ include: [{ model: Student, as: 'Students' }] })
    .then(campuses => res.json(campuses))
    .catch(err => res.send(err))
});

campusRouter.get('/:id', (req, res) => {
  Campus.findOne({
    where: {
      id: +req.params.id
    }
  })
    .then(campus => res.json(campus))
    .catch(err => res.send(err))
})

campusRouter.post('/new-campus', (req, res) => {
  Campus.create({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    description: req.body.description
  })
    .then(campus => res.json(campus))
    .catch(err => res.send(err))
})

campusRouter.put('/update/:id', (req, res) => {
  Campus.findOne({
    where: {
      id: +req.params.id
    }
  })
    .then(campus => {
      campus.update({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description
      })
    })
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
campusRouter.delete('/:id', (req, res) => {
  Campus.findOne({
    where: {
      id: +req.params.id
    }
  })
    .then(campus => {
      return campus.destroy({ force: true })
    })
    .then((result) => res.json('this record no longer exists'))
    .catch(err => res.send(err))
})

module.exports = campusRouter
