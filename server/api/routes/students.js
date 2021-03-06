const studentRouter = require('express').Router()
const db = require('../../db')
const Student = require('../../db/models/student')
const Campus = require('../../db/models/campus')


studentRouter.get('/', (req, res) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(err => res.send(err))
})

studentRouter.get('/:id', (req, res) => {
  console.log('reached server side')
  Student.findOne({
    where: {
      id: +req.params.id
    }
  })
    .then(student => res.json(student))
    .catch(err => res.send(err))
})

studentRouter.post('/', (req, res) => {
  Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gpa: +req.body.gpa,
    campusId: +req.body.campusId
  })
    .then(student => res.json(student))
    .catch(err => res.send(err))
})

studentRouter.put('/update/:id', (req, res) => {
  Student.findOne({
    where: {
      id: +req.params.id
    }
  })
    .then(student => {
      return student.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gpa: +req.body.gpa,
        campusId: req.body.campusId
      })
    })
    .then(student => student.reload())
    .then(result => res.json(result))
    .catch(err => res.send(err))
})

studentRouter.delete('/:id', (req, res) => {
  Student.findOne({
    where: {
      id: +req.params.id
    }
  })
    .then(student => {
      return student.destroy({ force: true })
    })
    .then((result) => res.json('this record no longer exists'))
    .catch(err => res.send(err))
})

module.exports = studentRouter;
