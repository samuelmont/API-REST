import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') { // Valida se o arquivo enviado é uma imagem PNG OU JPEG
      return callback(new multer.MulterError('O Arquivo precisa ser PNG ou JPG'));
    }
    return callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads', 'images')); // Destino de onde ficará a foto
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${aleatorio}${extname(file.originalname)}`); // Nome da foto formatado
    },
  }),
};
