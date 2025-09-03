const express = require('express')
const router = express.Router()
const RegistroController = require('../controllers/registro-controller')

router.get('/', RegistroController.getAllRegistros)
router.get('/:id', RegistroController.getRegistroById)
router.post('/', RegistroController.createRegistro)
router.put('/:id', RegistroController.updateRegistro)
router.delete('/:id', RegistroController.deleteRegistro)

module.exports = router