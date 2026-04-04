'use client';

import React, { useState, useEffect } from 'react';
import { useCMS } from '@/context/CMSContext';
import { Upload, Link as LinkIcon, Image as ImageIcon, Check, Search, Loader2 } from 'lucide-react';

interface ImageSelectorProps {
    onSelect: (url: string) => void;
    onCancel?: () => void;
}

const ImageSelector: React.FC<ImageSelectorProps> = ({ onSelect, onCancel }) => {
    const { getImages, uploadImage } = useCMS();
    const [mode, setMode] = useState<'upload' | 'library' | 'link'>('library');
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [urlInput, setUrlInput] = useState('');

    // Fetch library images when switching to library mode
    useEffect(() => {
        if (mode === 'library') {
            fetchLibrary();
        }
    }, [mode]);

    const fetchLibrary = async () => {
        setLoading(true);
        const urls = await getImages('images');
        setImages(urls);
        setLoading(false);
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        setUploading(true);
        try {
            const url = await uploadImage(e.target.files[0], 'images');
            if (url) {
                onSelect(url);
            }
        } catch (error) {
            console.error("Upload failed", error);
            alert("Upload failed");
        }
        setUploading(false);
    };

    const handleUrlSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (urlInput) onSelect(urlInput);
    };

    return (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
            {/* Tabs */}
            <div className="flex bg-slate-50 border-b border-slate-200">
                <button
                    onClick={() => setMode('library')}
                    className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${mode === 'library' ? 'bg-white text-brand-900 border-b-2 border-brand-GOLD' : 'text-slate-500 hover:text-slate-800'}`}
                >
                    <ImageIcon size={16} /> Library
                </button>
                <button
                    onClick={() => setMode('upload')}
                    className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${mode === 'upload' ? 'bg-white text-brand-900 border-b-2 border-brand-GOLD' : 'text-slate-500 hover:text-slate-800'}`}
                >
                    <Upload size={16} /> Upload New
                </button>
                <button
                    onClick={() => setMode('link')}
                    className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${mode === 'link' ? 'bg-white text-brand-900 border-b-2 border-brand-GOLD' : 'text-slate-500 hover:text-slate-800'}`}
                >
                    <LinkIcon size={16} /> Direct Link
                </button>
            </div>

            <div className="p-6 min-h-[300px]">
                {/* LIBRARY MODE */}
                {mode === 'library' && (
                    <div className="space-y-4">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center h-48 text-slate-500">
                                <Loader2 size={32} className="animate-spin mb-2" />
                                <p>Loading library...</p>
                            </div>
                        ) : images.length > 0 ? (
                            <div className="grid grid-cols-4 md:grid-cols-5 gap-3 max-h-[400px] overflow-y-auto p-1">
                                {images.map((url, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => onSelect(url)}
                                        className="relative aspect-square rounded-lg overflow-hidden group border border-slate-200 hover:border-brand-GOLD transition-all"
                                    >
                                        <img src={url} className="w-full h-full object-cover" loading="lazy" />
                                        <div className="absolute inset-0 bg-brand-50/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="bg-brand-GOLD text-brand-900 p-1.5 rounded-full">
                                                <Check size={16} />
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-10 text-slate-500">
                                No images found. Switch to "Upload" tab.
                            </div>
                        )}
                    </div>
                )}

                {/* UPLOAD MODE */}
                {mode === 'upload' && (
                    <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                        {uploading ? (
                            <div className="text-center">
                                <Loader2 size={40} className="animate-spin text-brand-GOLD mx-auto mb-4" />
                                <p className="font-bold text-slate-700">Uploading...</p>
                            </div>
                        ) : (
                            <label className="cursor-pointer text-center w-full h-full flex flex-col items-center justify-center">
                                <div className="p-4 bg-brand-TEAL text-white rounded-full mb-4 shadow-lg">
                                    <Upload size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-1">Click to Upload</h3>
                                <p className="text-sm text-slate-500 mb-6">Support JPG, PNG, WEBP, MP4</p>
                                <span className="bg-white border border-slate-300 px-4 py-2 rounded-lg text-sm font-bold text-slate-700 shadow-sm">Select from Computer</span>
                                <input type="file" accept="image/*,video/*" className="hidden" onChange={handleFileUpload} />
                            </label>
                        )}
                    </div>
                )}

                {/* LINK MODE */}
                {mode === 'link' && (
                    <form onSubmit={handleUrlSubmit} className="flex flex-col justify-center h-full max-w-sm mx-auto space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Paste Media URL</label>
                            <div className="relative">
                                <LinkIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input
                                    type="url"
                                    required
                                    value={urlInput}
                                    onChange={(e) => setUrlInput(e.target.value)}
                                    placeholder="https://..."
                                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-brand-TEAL text-white font-bold rounded-lg hover:bg-brand-950 transition-colors"
                        >
                            Use This Media
                        </button>
                    </form>
                )}
            </div>

            {onCancel && (
                <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end">
                    <button onClick={onCancel} className="text-sm font-bold text-slate-500 hover:text-slate-800">Cancel</button>
                </div>
            )}
        </div>
    );
};

export default ImageSelector;
