'use client';

import React, { useEffect, useState } from 'react';
import { useCMS } from '@/context/CMSContext';
import { Copy, RefreshCw, Image as ImageIcon, Loader2 } from 'lucide-react';

const MediaGallery: React.FC = () => {
    const { getImages, uploadImage } = useCMS();
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    const fetchImages = async () => {
        setLoading(true);
        const urls = await getImages('images');
        setImages(urls);
        setLoading(false);
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        setUploading(true);
        try {
            await uploadImage(e.target.files[0], 'images');
            await fetchImages();
        } catch (error) {
            console.error("Upload failed", error);
            alert("Upload failed");
        }
        setUploading(false);
    };

    const copyToClipboard = (url: string) => {
        navigator.clipboard.writeText(url);
        alert('URL Copied to clipboard!');
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <ImageIcon size={20} className="text-brand-GOLD" /> Media Library
                </h3>
                <div className="flex items-center gap-4">
                    <button
                        onClick={fetchImages}
                        disabled={loading}
                        className="p-2 text-slate-500 hover:text-brand-900 transition-colors"
                        title="Refresh"
                    >
                        <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
                    </button>
                    <label className={`cursor-pointer bg-brand-50 text-white px-4 py-2 rounded-lg font-bold text-sm tracking-wide hover:bg-brand-100 transition-all flex items-center gap-2 ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
                        {uploading ? <Loader2 size={16} className="animate-spin" /> : 'Upload New'}
                        <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                    </label>
                </div>
            </div>

            <div className="p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-[500px] overflow-y-auto">
                {loading && images.length === 0 ? (
                    <div className="col-span-full py-10 text-center text-slate-500 flex flex-col items-center">
                        <Loader2 size={32} className="animate-spin mb-2" />
                        <p>Loading images...</p>
                    </div>
                ) : images.length > 0 ? (
                    images.map((url, idx) => (
                        <div key={idx} className="group relative aspect-square bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                            <img src={url} alt={`Media ${idx}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-brand-50/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button
                                    onClick={() => copyToClipboard(url)}
                                    className="p-2 bg-white text-slate-900 rounded-full hover:bg-brand-GOLD hover:scale-110 transition-all"
                                    title="Copy URL"
                                >
                                    <Copy size={16} />
                                </button>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white text-slate-900 rounded-full hover:bg-brand-GOLD hover:scale-110 transition-all"
                                    title="Open"
                                >
                                    <div className="w-4 h-4 bg-current rounded-sm" />
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-10 text-center text-slate-500">
                        No images found in library.
                    </div>
                )}
            </div>
        </div>
    );
};

export default MediaGallery;
