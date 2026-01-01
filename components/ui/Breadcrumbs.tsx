'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
    name: string;
    item: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex mb-8 overflow-x-auto no-scrollbar whitespace-nowrap py-2" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest">
                <li className="flex items-center">
                    <Link
                        href="/"
                        className="text-neutral-500 hover:text-brand-GOLD transition-colors flex items-center gap-1"
                    >
                        <Home size={12} />
                        <span>Home</span>
                    </Link>
                </li>

                {items.map((crumb, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="flex items-center space-x-2">
                            <ChevronRight size={10} className="text-neutral-600 shrink-0" />
                            {isLast ? (
                                <span className="text-brand-GOLD px-2 py-1 bg-brand-GOLD/10 border border-brand-GOLD/20 rounded-md">
                                    {crumb.name}
                                </span>
                            ) : (
                                <Link
                                    href={crumb.item}
                                    className="text-neutral-500 hover:text-brand-GOLD transition-colors"
                                >
                                    {crumb.name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
