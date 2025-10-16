# MO2025 - Wedding Website Deployment Guide

## Deploying to Render

This wedding website consists of two parts:

1. **Frontend**: React/Vite application
2. **Backend**: Node.js/Express API server

### Prerequisites

1. **Render Account**: Sign up at [render.com](https://render.com)
2. **GitHub Repository**: Push your code to GitHub
3. **MongoDB Atlas**: Create a free cluster at [mongodb.com](https://mongodb.com)
4. **Cloudinary Account**: Sign up at [cloudinary.com](https://cloudinary.com)

### Step 1: Deploy Backend API

1. **Create Web Service**:

   - Go to Render Dashboard
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Select the repository containing your code

2. **Configure Backend Service**:

   ```
   Name: mojiola25-backend
   Environment: Node
   Region: Choose closest to your users
   Branch: main
   Root Directory: backend
   Build Command: npm install
   Start Command: npm start
   ```

3. **Set Environment Variables**:

   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   FRONTEND_URL=https://your-frontend-url.onrender.com
   PORT=5000
   ```

4. **Deploy**: Click "Create Web Service"

### Step 2: Deploy Frontend

1. **Create Static Site**:

   - Click "New" → "Static Site"
   - Connect the same GitHub repository

2. **Configure Frontend Service**:

   ```
   Name: mojiola25-frontend
   Branch: main
   Root Directory: . (leave empty)
   Build Command: npm install && npm run build
   Publish Directory: dist
   ```

3. **Set Environment Variables**:

   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. **Deploy**: Click "Create Static Site"

### Step 3: Update CORS Settings

After deployment, update the backend's FRONTEND_URL environment variable with your actual frontend URL.

### Step 4: Configure MongoDB

1. Create a MongoDB Atlas cluster
2. Add your Render IP addresses to the IP whitelist (or use 0.0.0.0/0 for all IPs)
3. Create a database user
4. Get the connection string and add it to your backend environment variables

### Step 5: Configure Cloudinary

1. Go to your Cloudinary dashboard
2. Copy your cloud name, API key, and API secret
3. Add these to both frontend and backend environment variables

### Important Notes

- **Free Tier Limitations**: Render free tier services spin down after 15 minutes of inactivity
- **Custom Domain**: You can add a custom domain in Render dashboard
- **SSL**: Render provides free SSL certificates automatically
- **Logs**: Check Render dashboard for deployment logs and errors

### Troubleshooting

1. **Build Fails**: Check the build logs in Render dashboard
2. **API Not Connecting**: Verify environment variables are set correctly
3. **Images Not Loading**: Check Cloudinary configuration
4. **Database Issues**: Verify MongoDB connection string and IP whitelist

### URLs After Deployment

- Frontend: `https://mojiola25-frontend.onrender.com`
- Backend API: `https://mojiola25-backend.onrender.com`

Replace "mojiola25" with your actual service names.
