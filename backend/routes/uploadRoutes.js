import express from 'express'
const uploadRouter = express()
import upload from '../middleware/multer.js'

uploadRouter.post("/upload", upload.single("photo"), (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  
    res.status(200).json({
      message: "Uploaded successfully",
      filePath: `/uploads/${req.file.filename}`,    
    });
  });
  
 export default uploadRouter