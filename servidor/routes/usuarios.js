const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const logDBMiddleware = require('../middlewares/logDB');

const usuarioController = require('../controllers/UsuarioController')

/* GET users listing. */
router.get('/criar', usuarioController.registroForm);
router.post('/criar', upload.any(), logDBMiddleware, usuarioController.salvarForm);

router.get('/login', usuarioController.loginForm);
router.post('/login', usuarioController.logarUsuario);

let storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, path.join('uploads'))
  },
  filename: function (req, res, cb) {
    cb(null, file.originalname)
  }
})

let upload = multer({ storage: storage })

module.exports = router;