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
                            <select
                                value={formData.status}
                                onChange={(e) => handleChange('status', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none"
                            >
                                <option value="Presale">Presale</option>
                                <option value="Under Construction">Under Construction</option>
                                <option value="Ready to Move">Ready to Move</option>
                            </select>
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
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none resize-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Descripción Corta (ES)</label>
                            <textarea
                                rows={3}
                                value={formData.description.es}
                                onChange={(e) => handleNestedChange('description', 'es', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none resize-none"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1">Long Description / Deep Dive (EN)</label>
                            <textarea
                                rows={6}
                                value={formData.longDescription?.en || formData.description.en}
                                onChange={(e) => handleNestedChange('longDescription', 'en', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none font-mono text-sm"
                            />
                            <p className="text-xs text-slate-500 mt-1">Supports HTML tags for formatting.</p>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1">Descripción Larga / Análisis (ES)</label>
                            <textarea
                                rows={6}
                                value={formData.longDescription?.es || formData.description.es}
                                onChange={(e) => handleNestedChange('longDescription', 'es', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-GOLD outline-none font-mono text-sm"
                            />
                            <p className="text-xs text-slate-500 mt-1">Soporta etiquetas HTML para formato.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminPage;
