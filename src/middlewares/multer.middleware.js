import multer from "multer";
// import crypto from "crypto"; // crypto is used to generate unique file names

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
}
})
export const upload = multer({ 
    storage, 
})
  
