const multer = require('multer');
const storage = multer.memoryStorage(); // memory storage for buffer upload
const upload = multer({ storage });

module.exports = upload;
