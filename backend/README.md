# Wedding Photo Backend Setup

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Cloudinary account

## Setup Instructions

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Copy `.env` file and update with your credentials:

```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/wedding-photos
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding-photos

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Start MongoDB

If using local MongoDB:

```bash
mongod
```

### 4. Start Backend Server

```bash
npm run dev
# OR
npm start
```

The backend will run on `http://localhost:5000`

### 5. Frontend Configuration

Make sure your frontend `.env` has:

```bash
VITE_API_BASE_URL=http://localhost:5000/api
```

## API Endpoints

### Upload Photo/Video

- **POST** `/api/upload`
- **Body**: FormData with `file`, `uploaderName` (optional), `uploaderEmail` (optional)
- **Response**: `{ success: true, photo: { id, url, originalName, uploadedAt } }`

### Get All Photos

- **GET** `/api/photos`
- **Response**: `{ success: true, photos: [...] }`

### Get Photo Count

- **GET** `/api/photos/count`
- **Response**: `{ success: true, count: number }`

### Delete Photo (Admin)

- **DELETE** `/api/photos/:id`
- **Response**: `{ success: true, message: "Photo deleted successfully" }`

## Features

✅ **File Upload to Cloudinary**: Automatic optimization and cloud storage
✅ **MongoDB Storage**: Metadata stored in database
✅ **File Validation**: Only images/videos, 50MB max
✅ **Error Handling**: Comprehensive error responses
✅ **CORS Enabled**: Frontend integration ready
✅ **Uploader Info**: Optional name/email tracking

## Production Deployment

### Backend (Heroku/Railway/etc.)

1. Set environment variables in your hosting platform
2. Use MongoDB Atlas for database
3. Deploy backend code

### Frontend

1. Update `API_BASE_URL` to your deployed backend URL
2. Deploy frontend (Vercel/Netlify/etc.)

## Security Notes

- Backend handles Cloudinary secrets securely
- File type validation prevents malicious uploads
- MongoDB connection is properly configured
- CORS configured for frontend domain

## Troubleshooting

**MongoDB Connection Issues:**

- Ensure MongoDB is running locally
- Check connection string format
- Verify network access for Atlas

**Upload Failures:**

- Verify Cloudinary credentials
- Check file size limits
- Ensure proper CORS configuration

**Frontend Connection:**

- Verify backend URL in frontend
- Check CORS headers
- Ensure backend is running
