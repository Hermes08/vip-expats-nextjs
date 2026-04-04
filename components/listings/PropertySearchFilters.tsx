'use client';

import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export interface FilterState {
  zone: string;
  type: string;
  status: string;
  city: string;
  minPrice: number;
  maxPrice: number;
  query: string;
}

export const DEFAULT_FILTERS: FilterState = {
  zone: '', type: '', status: '', city: '', minPrice: 0, maxPrice: 0, query: '',
};

const ZONES = [
  { value: '', label: { en: 'All Zones', es: 'Todas las Zonas' } },
  { value: 'Beach', label: { en: '🏖 Beach', es: '🏖 Playa' } },
  { value: 'City', label: { en: '🌆 City', es: '🌆 Ciudad' } },
  { value: 'Mountain', label: { en: '🏔 Mountain', es: '🏔 Montaña' } },
  { value: 'Caribbean', label: { en: '🌴 Caribbean', es: '🌴 Caribe' } },
  { value: 'Interior', label: { en: '🌿 Interior', es: '🌿 Interior' } },
];

const TYPES = [
  { value: '', label: { en: 'All Types', es: 'Todos los Tipos' } },
  { value: 'Condo', label: { en: 'Condo', es: 'Apartamento' } },
  { value: 'House', label: { en: 'House', es: 'Casa' } },
  { value: 'Villa', label: { en: 'Villa', es: 'Villa' } },
  { value: 'Penthouse', label: { en: 'Penthouse', es: 'Penthouse' } },
  { value: 'Land', label: { en: 'Land', es: 'Terreno' } },
  { value: 'Commercial', label: { en: 'Commercial', es: 'Comercial' } },
];

const STATUSES = [
  { value: '', label: { en: 'Buy & Rent', es: 'Compra y Alquiler' } },
  { value: 'For Sale', label: { en: 'For Sale', es: 'En Venta' } },
  { value: 'For Rent', label: { en: 'For Rent', es: 'En Alquiler' } },
];

const CITIES = [
  { value: '', label: { en: 'All Cities', es: 'Todas las Ciudades' } },
  { value: 'Panama City', label: { en: 'Panama City', es: 'Ciudad de Panamá' } },
  { value: 'Boquete', label: { en: 'Boquete', es: 'Boquete' } },
  { value: 'Coronado', label: { en: 'Coronado', es: 'Coronado' } },
  { value: 'Bocas del Toro', label: { en: 'Bocas del Toro', es: 'Bocas del Toro' } },
  { value: 'El Valle', label: { en: 'El Valle', es: 'El Valle' } },
  { value: 'Pedasi', label: { en: 'Pedasi', es: 'Pedasi' } },
  { value: 'Santa Clara', label: { en: 'Santa Clara', es: 'Santa Clara' } },
  { value: 'Chiriqui', label: { en: 'Chiriqui', es: 'Chiriquí' } },
];

const PRICE_OPTS = [
  { value: 0, label: 'Any' },
  { value: 100000, label: '$100K' },
  { value: 200000, label: '$200K' },
  { value: 300000, label: '$300K' },
  { value: 500000, label: '$500K' },
  { value: 1000000, label: '$1M' },
  { value: 2000000, label: '$2M+' },
];

interface Props {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  total: number;
  filtered: number;
  lang: 'en' | 'es';
}

export default function PropertySearchFilters({ filters, onChange, total, filtered, lang }: Props) {
  const hasActive = filters.zone || filters.type || filters.status || filters.city || filters.minPrice || filters.maxPrice || filters.query;

  function set<K extends keyof FilterState>(key: K, value: FilterState[K]) {
    onChange({ ...filters, [key]: value });
  }

  function reset() {
    onChange(DEFAULT_FILTERS);
  }

  const selectCls = "w-full bg-white border border-brand-TEAL/30 text-brand-950 text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-TEAL transition-colors appearance-none cursor-pointer";

  return (
    <div className="bg-white border border-brand-TEAL/20 rounded-2xl p-5 mb-8 shadow-sm">
      {/* Search text */}
      <div className="relative mb-4">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-TEAL/50" />
        <input
          type="text"
          value={filters.query}
          onChange={e => set('query', e.target.value)}
          placeholder={lang === 'es' ? 'Buscar por nombre, zona, ciudad...' : 'Search by name, zone, city...'}
          className="w-full bg-white border border-brand-TEAL/30 text-brand-950 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-brand-TEAL transition-colors placeholder:text-slate-400"
        />
        {filters.query && (
          <button onClick={() => set('query', '')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors">
            <X size={14} />
          </button>
        )}
      </div>

      {/* Filter row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* City */}
        <div className="col-span-2 sm:col-span-1 lg:col-span-1">
          <select value={filters.city} onChange={e => set('city', e.target.value)} className={selectCls}>
            {CITIES.map(c => (
              <option key={c.value} value={c.value}>{c.label[lang]}</option>
            ))}
          </select>
        </div>

        {/* Zone */}
        <div>
          <select value={filters.zone} onChange={e => set('zone', e.target.value)} className={selectCls}>
            {ZONES.map(z => (
              <option key={z.value} value={z.value}>{z.label[lang]}</option>
            ))}
          </select>
        </div>

        {/* Type */}
        <div>
          <select value={filters.type} onChange={e => set('type', e.target.value)} className={selectCls}>
            {TYPES.map(t => (
              <option key={t.value} value={t.value}>{t.label[lang]}</option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div>
          <select value={filters.status} onChange={e => set('status', e.target.value)} className={selectCls}>
            {STATUSES.map(s => (
              <option key={s.value} value={s.value}>{s.label[lang]}</option>
            ))}
          </select>
        </div>

        {/* Min price */}
        <div>
          <select value={filters.minPrice} onChange={e => set('minPrice', Number(e.target.value))} className={selectCls}>
            {PRICE_OPTS.slice(0, -1).map(p => (
              <option key={p.value} value={p.value}>{p.value === 0 ? (lang === 'es' ? 'Min Precio' : 'Min Price') : p.label}</option>
            ))}
          </select>
        </div>

        {/* Max price */}
        <div>
          <select value={filters.maxPrice} onChange={e => set('maxPrice', Number(e.target.value))} className={selectCls}>
            {PRICE_OPTS.map(p => (
              <option key={p.value} value={p.value}>{p.value === 0 ? (lang === 'es' ? 'Max Precio' : 'Max Price') : p.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results summary + reset */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-100">
        <span className="text-slate-500 text-xs font-semibold">
          {lang === 'es'
            ? `Mostrando ${filtered} de ${total} propiedades`
            : `Showing ${filtered} of ${total} properties`}
        </span>
        {hasActive && (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-brand-GOLD/70 hover:text-brand-GOLD text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <X size={12} />
            {lang === 'es' ? 'Limpiar filtros' : 'Clear filters'}
          </button>
        )}
      </div>
    </div>
  );
}
