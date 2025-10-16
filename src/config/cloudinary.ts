import { Cloudinary } from '@cloudinary/url-gen';

export const cloudinaryConfig = {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '',
    uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '',
    apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY || ''
};

export const cloudinary = new Cloudinary({
    cloud: {
        cloudName: cloudinaryConfig.cloudName
    }
});