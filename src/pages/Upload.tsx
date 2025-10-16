import React, { useState, useRef, useEffect } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5100/api';

interface UploadedFile {
    id: string;
    url: string;
    originalName: string;
    uploadedAt: string;
    fileType: string;
    fileSize: number;
    uploaderInfo?: {
        name?: string;
        email?: string;
    };
}

const Upload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
    const [loadingGallery, setLoadingGallery] = useState(false);
    const [uploaderName, setUploaderName] = useState('');
    const [uploaderEmail, setUploaderEmail] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Load photos from backend on component mount
    useEffect(() => {
        fetchPhotosFromBackend();
    }, []);

    const fetchPhotosFromBackend = async () => {
        setLoadingGallery(true);
        try {
            const response = await fetch(`${API_BASE_URL}/photos`);
            const data = await response.json();
            if (data.success) {
                setUploadedFiles(data.photos);
            }
        } catch (error) {
            console.error('Error fetching photos:', error);
        } finally {
            setLoadingGallery(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const onButtonClick = () => {
        inputRef.current?.click();
    };

    const handleUpload = async () => {
        if (!file) return;
        setUploading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('uploaderName', uploaderName);
        formData.append('uploaderEmail', uploaderEmail);

        try {
            const response = await fetch(`${API_BASE_URL}/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {

                await fetchPhotosFromBackend();
                setFile(null);
                setUploaderName('');
                setUploaderEmail('');
            } else {
                throw new Error(data.error || 'Upload failed');
            }
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Upload failed! Please try again.');
        } finally {
            setUploading(false);
        }
    };

    // Function to fetch all images from a specific folder in Cloudinary
    const fetchCloudinaryImages = async () => {
        await fetchPhotosFromBackend();
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
                Share Your Wedding Day Memories
            </h1>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Upload your photos and videos from our special day. Help us capture every moment of joy and celebration!
            </p>

            {/* Drag and Drop Area */}
            <div className="max-w-2xl mx-auto">
                <div
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${dragActive
                        ? 'border-pink-400 bg-pink-50'
                        : file
                            ? 'border-green-400 bg-green-50'
                            : 'border-gray-300 bg-gray-50 hover:border-pink-300 hover:bg-pink-25'
                        }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                >
                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/*,video/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    {file ? (
                        <div className="space-y-4">
                            <div className="text-green-600">
                                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-gray-700">{file.name}</p>
                                <p className="text-sm text-gray-500">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                            </div>

                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Your name (optional)"
                                    value={uploaderName}
                                    onChange={(e) => setUploaderName(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Your email (optional)"
                                    value={uploaderEmail}
                                    onChange={(e) => setUploaderEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                            </div>

                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={handleUpload}
                                    disabled={uploading}
                                    className="bg-pink-500 hover:bg-pink-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                                >
                                    {uploading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Uploading...
                                        </>
                                    ) : (
                                        'Upload File'
                                    )}
                                </button>
                                <button
                                    onClick={() => setFile(null)}
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="text-gray-400">
                                <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                    Drop your files here, or{' '}
                                    <button
                                        onClick={onButtonClick}
                                        className="text-pink-500 hover:text-pink-600 underline font-medium"
                                    >
                                        browse
                                    </button>
                                </h3>
                                <p className="text-gray-500">
                                    Supports: JPG, PNG, GIF, MP4, MOV (Max 50MB)
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Uploaded Files Gallery */}
                {uploadedFiles.length > 0 && (
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-700">
                                Wedding Memories ({uploadedFiles.length})
                            </h3>
                            <button
                                onClick={fetchCloudinaryImages}
                                disabled={loadingGallery}
                                className="text-sm bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                {loadingGallery ? 'Loading...' : 'Refresh Gallery'}
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {uploadedFiles.map((fileObj, index) => (
                                <div key={index} className="group cursor-pointer relative overflow-hidden">
                                    <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                                        <img
                                            src={fileObj.url}
                                            alt={fileObj.originalName}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            onClick={() => window.open(fileObj.url, '_blank')}
                                            loading="lazy"
                                        />
                                    </div>
                                    {/* Overlay with info */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                                            <p className="text-sm font-medium truncate">{fileObj.originalName}</p>
                                            <p className="text-xs opacity-80">{new Date(fileObj.uploadedAt).toLocaleDateString()}</p>
                                            {fileObj.uploaderInfo?.name && (
                                                <p className="text-xs opacity-80">by {fileObj.uploaderInfo.name}</p>
                                            )}
                                        </div>
                                        {/* Click indicator */}
                                        <div className="absolute top-2 right-2 bg-white/20 rounded-full p-2">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Upload;
