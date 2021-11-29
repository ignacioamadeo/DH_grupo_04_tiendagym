const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/imgRegister"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage,
fileFilter : (_req, file, cb)=>{
  if(file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/ping' || file.mimetype == 'image/gif'  ){
    cb(null, true)
  } else{
    cb(null, false);
    return cb(new Error('solo formatos .jpg .jpeg .png .ping .gif '))
  }
}
});

module.exports = upload;
