const router = require('express').Router()
const ctrls = require('../controllers/user')

router.post('/register', ctrls.register)

module.exports = router


// CRUD | Create - Read - Update - Delete | POST - GET - PUT - DELETEeee