const express = require('express');
const IndexController = require('../controllers/IndexController')
const router = express.Router();
const multer = require('multer')

/* GET home page. */
router.get('/', IndexController.viewCadastro);
router.post('/cadastro', IndexController.salvarCadastro);

module.exports = router;


/*
  filename: (req, file, callback) => {
    const imageName = Date.now() + file.originalname;
    callback(null, imageName);
  },
});

const upload = multer({ storage: multerDiskStorage });
const validacoes = [
  body('nome').notEmpty().isString().withMessage("O nome não pode ser vazio"),
  body('email').isEmail().notEmpty(),
];
comentario> GET home page. <comentario
router.get('/', indexController.viewCadastro);
router.post(
  '/',
  validacoes,
  upload.single('avatar'),
  indexController.salvarCadastro
);

module.exports = router;

*/