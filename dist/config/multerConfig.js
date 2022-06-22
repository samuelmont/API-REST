"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const aleatorio = Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') { // Valida se o arquivo enviado é uma imagem PNG OU JPEG
      return callback(new _multer2.default.MulterError('O Arquivo precisa ser PNG ou JPG'));
    }
    return callback(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, callback) => {
      callback(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images')); // Destino de onde ficará a foto
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${aleatorio}${_path.extname.call(void 0, file.originalname)}`); // Nome da foto formatado
    },
  }),
};
