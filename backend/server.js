const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype.startsWith("image/") ||
      file.mimetype.startsWith("video/")
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only images and videos are allowed!"), false);
    }
  },
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const photoSchema = new mongoose.Schema({
  originalName: { type: String, required: true },
  cloudinaryUrl: { type: String, required: true },
  cloudinaryPublicId: { type: String, required: true },
  fileType: { type: String, required: true },
  fileSize: { type: Number, required: true },
  uploadedAt: { type: Date, default: Date.now },
  uploaderInfo: {
    name: String,
    email: String,
  },
});

const Photo = mongoose.model("Photo", photoSchema);


app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Wedding backend is running!" });
});

app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Wedding backend is running!" });
});

app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          folder: "wedding-photos",
          transformation: [
            { quality: "auto" }, 
            { fetch_format: "auto" },
          ],
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(req.file.buffer);
    });

    const photo = new Photo({
      originalName: req.file.originalname,
      cloudinaryUrl: result.secure_url,
      cloudinaryPublicId: result.public_id,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      uploaderInfo: {
        name: req.body.uploaderName || "Anonymous",
        email: req.body.uploaderEmail || "",
      },
    });

    await photo.save();

    res.json({
      success: true,
      photo: {
        id: photo._id,
        url: result.secure_url,
        originalName: req.file.originalname,
        uploadedAt: photo.uploadedAt,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
});

app.get("/api/photos", async (req, res) => {
  try {
    const photos = await Photo.find()
      .sort({ uploadedAt: -1 })
      .select(
        "originalName cloudinaryUrl uploadedAt fileType fileSize uploaderInfo"
      );

    res.json({
      success: true,
      photos: photos.map((photo) => ({
        id: photo._id,
        url: photo.cloudinaryUrl,
        originalName: photo.originalName,
        uploadedAt: photo.uploadedAt,
        fileType: photo.fileType,
        fileSize: photo.fileSize,
        uploaderInfo: photo.uploaderInfo,
      })),
    });
  } catch (error) {
    console.error("Fetch photos error:", error);
    res.status(500).json({ error: "Failed to fetch photos" });
  }
});

app.get("/api/photos/count", async (req, res) => {
  try {
    const count = await Photo.countDocuments();
    res.json({ success: true, count });
  } catch (error) {
    res.status(500).json({ error: "Failed to get photos count" });
  }
});

app.delete("/api/photos/:id", async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo) {
      return res.status(404).json({ error: "Photo not found" });
    }

    await cloudinary.uploader.destroy(photo.cloudinaryPublicId);

    await Photo.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Photo deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: "Failed to delete photo" });
  }
});

app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "File too large (max 50MB)" });
    }
  }
  res.status(500).json({ error: error.message });
});

app
  .listen(PORT, () => {
    console.log(`Wedding backend server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(
        `Port ${PORT} is already in use. Trying port ${PORT + 1}...`
      );
      PORT = PORT + 1;
      app.listen(PORT, () => {
        console.log(`Wedding backend server running on port ${PORT}`);
        console.log(`Health check: http://localhost:${PORT}/health`);
      });
    } else {
      console.error("Server error:", err);
    }
  });

module.exports = app;
