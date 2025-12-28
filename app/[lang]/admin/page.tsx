'use client';

import React, { useState } from 'react';
import { useCMS } from '@/context/CMSContext';
import { Project } from '@/lib/types';
import { X, Save, Edit2 } from 'lucide-react';

const AdminPage = () => {
    const { isAuthenticated, login, logout, projects, updateProject } = useCMS();
    const [pin, setPin] = useState('');
    const [editingProject, setEditingProject] = useState<Project | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(pin);
    };

    const toggleSection = async (projectId: string, field: 'showVideo' | 'showFloorplans', currentValue: boolean | undefined) => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        const currentEffectiveValue = currentValue !== false;
        const newValue = !currentEffectiveValue;

        const updatedProject = { ...project, [field]: newValue };
        await updateProject(updatedProject);
    };

    const handleSaveCallback = async (updatedProject: Project) => {
        await updateProject(updatedProject);
        setEditingProject(null);
    };

    if (!isAuthenticated) {
        return (
            <div className="pt-32 min-h-screen bg-slate-50 flex flex-col items-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-6 text-center text-slate-800">Admin Panel</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Enter PIN</label>
                            <input
                                type="password"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD focus:border-brand-GOLD outline-none"
                                placeholder="****"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-brand-900 text-white py-2 rounded-lg font-bold hover:bg-brand-800 transition-colors"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    if (editingProject) {
        return (
            <div className="pt-32 min-h-screen bg-slate-50 pb-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ProjectEditor project={editingProject} onSave={handleSaveCallback} onCancel={() => setEditingProject(null)} />
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 min-h-screen bg-slate-50 pb-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-bold text-slate-800">Project Visibility Manager</h1>
                    <button
                        onClick={logout}
                        className="px-6 py-2 bg-red-50 text-red-600 rounded-lg font-bold hover:bg-red-100 transition-colors"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid gap-6">
                    {projects.map(project => (
                        <div key={project.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between gap-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">{project.name.en}</h3>
                                    <p className="text-sm text-slate-500 capitalize mb-2">{project.slug}</p>
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${project.status === 'Presale' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setEditingProject(project)}
                                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-bold hover:bg-slate-200 transition-colors flex items-center gap-2"
                                >
                                    <Edit2 size={16} /> Edit Details
                                </button>
                            </div>

                            <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                                {/* Video Toggle */}
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-slate-600">Video Section</span>
                                    <button
                                        onClick={() => toggleSection(project.id, 'showVideo', project.showVideo)}
                                        className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${project.showVideo !== false ? 'bg-green-500' : 'bg-slate-300'
                                            }`}
                                    >
                                        <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${project.showVideo !== false ? 'translate-x-6' : 'translate-x-0'
                                            }`} />
                                    </button>
                                </div>

                                {/* Floorplans Toggle */}
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-slate-600">Floorplans</span>
                                    <button
                                        onClick={() => toggleSection(project.id, 'showFloorplans', project.showFloorplans)}
                                        className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${project.showFloorplans !== false ? 'bg-green-500' : 'bg-slate-300'
                                            }`}
                                    >
                                        <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${project.showFloorplans !== false ? 'translate-x-6' : 'translate-x-0'
                                            }`} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const ProjectEditor = ({ project, onSave, onCancel }: { project: Project, onSave: (p: Project) => void, onCancel: () => void }) => {
    const [formData, setFormData] = useState<Project>(project);

    const handleChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNestedChange = (parent: string, key: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [parent]: {
                ...(prev[parent as keyof Project] as Record<string, string>),
                [key]: value
            }
        }));
    };

    const handleArrayFromText = (field: string, text: string) => {
        const array = text.split('\n').filter(line => line.trim() !== '');
        handleChange(field, array);
    };

    const handleLocalizedArrayFromText = (field: string, lang: 'en' | 'es', text: string) => {
        const array = text.split('\n').filter(line => line.trim() !== '');
        setFormData(prev => ({
            ...prev,
            [field]: {
                ...(prev[field as keyof Project] as Record<string, string[]>),
                [lang]: array
            }
        }));
    };

    const toggleArrayItem = (field: string, item: string) => {
        const currentArray = (formData[field as keyof Project] as string[]) || [];
        const newArray = currentArray.includes(item)
            ? currentArray.filter(i => i !== item)
            : [...currentArray, item];
        handleChange(field, newArray);
    };

    const handleAddFaq = () => {
        setFormData(prev => ({
            ...prev,
            faqs: [...(prev.faqs || []), { question: '', answer: '' }]
        }));
    };

    const handleRemoveFaq = (index: number) => {
        setFormData(prev => ({
            ...prev,
            faqs: (prev.faqs || []).filter((_, i) => i !== index)
        }));
    };

    const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
        const newFaqs = [...(formData.faqs || [])];
        newFaqs[index] = { ...newFaqs[index], [field]: value };
        handleChange('faqs', newFaqs);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-slate-900 p-6 flex justify-between items-center sticky top-0 z-10">
                <h2 className="text-2xl font-bold text-white">Edit Project: {project.name.en}</h2>
                <div className="flex gap-4">
                    <button onClick={onCancel} className="px-4 py-2 bg-slate-700 text-white rounded-lg font-bold hover:bg-slate-600 flex items-center gap-2">
                        <X size={18} /> Cancel
                    </button>
                    <button onClick={() => onSave(formData)} className="px-4 py-2 bg-brand-GOLD text-brand-950 rounded-lg font-bold hover:bg-yellow-400 flex items-center gap-2">
                        <Save size={18} /> Save Changes
                    </button>
                </div>
            </div>

            <div className="p-8 space-y-8 max-h-[80vh] overflow-y-auto">
                {/* Basic Info */}
                <section className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Basic Info</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Slug (URL)</label>
                            <input disabled value={formData.slug} className="w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded-lg text-slate-500 cursor-not-allowed" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Status</label>
                            <div className="flex flex-wrap gap-2">
                                {['Presale', 'Under Construction', 'Ready to Move'].map(status => (
                                    <button
                                        key={status}
                                        onClick={() => handleChange('status', status)}
                                        className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${formData.status === status
                                            ? 'bg-green-600 text-white border-green-600 shadow-md transform scale-105'
                                            : 'bg-white text-slate-500 border-slate-300 hover:border-green-500'
                                            }`}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Type (Multi-select)</label>
                            <div className="flex flex-wrap gap-2">
                                {['Condo', 'House', 'Resort', 'Villa'].map(type => (
                                    <button
                                        key={type}
                                        onClick={() => toggleArrayItem('type', type)}
                                        className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${(formData.type as string[]).includes(type)
                                            ? 'bg-brand-GOLD text-brand-950 border-brand-GOLD'
                                            : 'bg-white text-slate-500 border-slate-300 hover:border-brand-GOLD'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Zone (Multi-select)</label>
                            <div className="flex flex-wrap gap-2">
                                {['Beach', 'Mountain', 'Caribbean', 'City'].map(zone => (
                                    <button
                                        key={zone}
                                        onClick={() => toggleArrayItem('zone', zone)}
                                        className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${(formData.zone as string[]).includes(zone)
                                            ? 'bg-blue-500 text-white border-blue-500'
                                            : 'bg-white text-slate-500 border-slate-300 hover:border-blue-500'
                                            }`}
                                    >
                                        {zone}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Price From ($)</label>
                            <input
                                type="number"
                                value={formData.priceFrom}
                                onChange={(e) => handleChange('priceFrom', Number(e.target.value))}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                            />
                        </div>
                    </div>
                </section>

                {/* Property Details */}
                <section className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Property Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Beds (e.g. "2 - 3")</label>
                            <input
                                value={formData.beds}
                                onChange={(e) => handleChange('beds', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Baths (e.g. "2 - 2.5")</label>
                            <input
                                value={formData.baths}
                                onChange={(e) => handleChange('baths', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Sqft (e.g. "1,200 - 2,500")</label>
                            <input
                                value={formData.sqft}
                                onChange={(e) => handleChange('sqft', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Units Available</label>
                            <input
                                type="number"
                                value={formData.unitsAvailable}
                                onChange={(e) => handleChange('unitsAvailable', Number(e.target.value))}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1">Video URL (YouTube/Vimeo/MP4)</label>
                            <input
                                value={formData.videoUrl || ''}
                                onChange={(e) => handleChange('videoUrl', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                                placeholder="https://..."
                            />
                        </div>
                    </div>
                </section>

                {/* Names & Titles */}
                <section className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Names & Titles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="font-semibold text-slate-600">English (EN)</h4>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">Project Name</label>
                                <input
                                    value={formData.name.en}
                                    onChange={(e) => handleNestedChange('name', 'en', e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">H1 Title (SEO)</label>
                                <input
                                    value={formData.h1Title.en}
                                    onChange={(e) => handleNestedChange('h1Title', 'en', e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">Location Label</label>
                                <input
                                    value={formData.location.en}
                                    onChange={(e) => handleNestedChange('location', 'en', e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-slate-600">Spanish (ES)</h4>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">Nombre del Proyecto</label>
                                <input
                                    value={formData.name.es}
                                    onChange={(e) => handleNestedChange('name', 'es', e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">Título H1 (SEO)</label>
                                <input
                                    value={formData.h1Title.es}
                                    onChange={(e) => handleNestedChange('h1Title', 'es', e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">Ubicación</label>
                                <input
                                    value={formData.location.es}
                                    onChange={(e) => handleNestedChange('location', 'es', e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Descriptions */}
                <section className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Descriptions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Short Description (EN)</label>
                            <textarea
                                rows={3}
                                value={formData.description.en}
                                onChange={(e) => handleNestedChange('description', 'en', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none resize-none bg-white text-slate-900 text-sm shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Descripción Corta (ES)</label>
                            <textarea
                                rows={3}
                                value={formData.description.es}
                                onChange={(e) => handleNestedChange('description', 'es', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none resize-none bg-white text-slate-900 text-sm shadow-sm"
                            />
                        </div>

                        {/* Expandable Long Description Areas */}
                        {[
                            { label: 'Long Description / Deep Dive (EN)', field: 'longDescription', lang: 'en', val: formData.longDescription?.en || formData.description.en },
                            { label: 'Descripción Larga / Análisis (ES)', field: 'longDescription', lang: 'es', val: formData.longDescription?.es || formData.description.es }
                        ].map((item) => (
                            <div key={item.lang} className={`md:col-span-2 relative transition-all duration-300 group`}>
                                <div className="flex justify-between items-end mb-1">
                                    <label className="block text-sm font-bold text-slate-700">{item.label}</label>
                                </div>
                                <textarea
                                    rows={6}
                                    value={item.val}
                                    onChange={(e) => handleNestedChange(item.field, item.lang, e.target.value)}
                                    className={`w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none font-mono text-sm bg-white text-slate-900 shadow-sm transition-all duration-300 focus:h-[50vh] focus:absolute focus:z-50 focus:shadow-2xl focus:top-0 focus:-mt-10 h-40`}
                                />
                                <p className="text-xs text-slate-500 mt-1">Supports HTML tags for formatting. CLICK TO EXPAND.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Analysis & Deep Dives */}
                <section className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Analysis & Deep Dives</h3>

                    {['marketAnalysis', 'locationAnalysis', 'investmentAnalysis', 'buyerProfile', 'residencyInfo', 'servicesCTA'].map((field) => (
                        <div key={field} className="space-y-4 border-b border-slate-100 pb-6 last:border-0 group">
                            <h4 className="font-semibold text-slate-700 capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <label className="block text-xs font-bold text-slate-500 mb-1">English (EN)</label>
                                    <textarea
                                        rows={4}
                                        value={(formData[field as keyof Project] as Record<string, string>)?.en || ''}
                                        onChange={(e) => handleNestedChange(field, 'en', e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none resize-none text-sm bg-white text-slate-900 shadow-sm transition-all duration-300 focus:h-[40vh] focus:absolute focus:z-50 focus:shadow-2xl focus:top-0 focus:-mt-6 h-32"
                                        placeholder={`Enter ${field} in English...`}
                                    />
                                    <span className="text-[10px] text-slate-400 absolute bottom-2 right-4 pointer-events-none group-focus-within:hidden">Expand on focus</span>
                                </div>
                                <div className="relative">
                                    <label className="block text-xs font-bold text-slate-500 mb-1">Spanish (ES)</label>
                                    <textarea
                                        rows={4}
                                        value={(formData[field as keyof Project] as Record<string, string>)?.es || ''}
                                        onChange={(e) => handleNestedChange(field, 'es', e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none resize-none text-sm bg-white text-slate-900 shadow-sm transition-all duration-300 focus:h-[40vh] focus:absolute focus:z-50 focus:shadow-2xl focus:top-0 focus:-mt-6 h-32"
                                        placeholder={`Ingresar ${field} en Español...`}
                                    />
                                    <span className="text-[10px] text-slate-400 absolute bottom-2 right-4 pointer-events-none group-focus-within:hidden">Expandir al enfocar</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Lists Management */}
                <section className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Lists Management (One item per line)</h3>

                    {/* Simple Lists */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Keywords</label>
                            <textarea
                                rows={5}
                                value={formData.keywords?.join('\n') || ''}
                                onChange={(e) => handleArrayFromText('keywords', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none resize-none bg-white text-slate-900 shadow-sm"
                                placeholder="Luxury\nBeachfront\nCondo..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Did You Know?</label>
                            <textarea
                                rows={5}
                                value={formData.didYouKnow?.join('\n') || ''}
                                onChange={(e) => handleArrayFromText('didYouKnow', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none resize-none bg-white text-slate-900 shadow-sm"
                                placeholder="Interesting fact 1\nInteresting fact 2..."
                            />
                        </div>
                    </div>

                    {/* Localized Lists */}
                    {['highlights', 'amenities'].map((field) => (
                        <div key={field} className="space-y-4 border-t border-slate-100 pt-6">
                            <h4 className="font-semibold text-slate-700 capitalize">{field}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-1">English (EN)</label>
                                    <textarea
                                        rows={5}
                                        value={(formData[field as keyof Project] as Record<string, string[]>)?.en?.join('\n') || ''}
                                        onChange={(e) => handleLocalizedArrayFromText(field, 'en', e.target.value)}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none resize-none bg-white text-slate-900 shadow-sm"
                                        placeholder={`Enter ${field} in English...`}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-1">Spanish (ES)</label>
                                    <textarea
                                        rows={5}
                                        value={(formData[field as keyof Project] as Record<string, string[]>)?.es?.join('\n') || ''}
                                        onChange={(e) => handleLocalizedArrayFromText(field, 'es', e.target.value)}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none resize-none bg-white text-slate-900 shadow-sm"
                                        placeholder={`Ingresar ${field} en Español...`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* FAQs */}
                <section className="space-y-6">
                    <div className="flex justify-between items-center border-b pb-2">
                        <h3 className="text-lg font-bold text-slate-800">FAQs</h3>
                        <button
                            onClick={handleAddFaq}
                            className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-sm font-bold hover:bg-green-100 transition-colors"
                        >
                            + Add FAQ
                        </button>
                    </div>

                    <div className="space-y-4">
                        {formData.faqs?.map((faq, index) => (
                            <div key={index} className="bg-slate-50 p-4 rounded-xl relative group border border-slate-200">
                                <button
                                    onClick={() => handleRemoveFaq(index)}
                                    className="absolute top-2 right-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <X size={16} />
                                </button>
                                <div className="space-y-3">
                                    <input
                                        value={faq.question}
                                        onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none font-bold bg-white text-slate-900 shadow-sm"
                                        placeholder="Question"
                                    />
                                    <textarea
                                        rows={2}
                                        value={faq.answer}
                                        onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none resize-none text-sm bg-white text-slate-900 shadow-sm"
                                        placeholder="Answer"
                                    />
                                </div>
                            </div>
                        ))}
                        {(!formData.faqs || formData.faqs.length === 0) && (
                            <p className="text-slate-500 text-sm text-center italic py-4">No FAQs added yet.</p>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminPage;
