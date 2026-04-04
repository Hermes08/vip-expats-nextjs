'use client';

import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BarData {
    label: string;
    value: number;
    color: string;
}

interface AnimatedBarProps {
    position: [number, number, number];
    targetHeight: number;
    color: string;
    delay: number;
}

const AnimatedBar: React.FC<AnimatedBarProps> = ({ position, targetHeight, color, delay }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const progressRef = useRef(0);
    const started = useRef(false);
    const startTime = useRef(0);

    useFrame((state) => {
        if (!meshRef.current) return;
        const elapsed = state.clock.getElapsedTime();

        if (!started.current) {
            if (elapsed > delay) {
                started.current = true;
                startTime.current = elapsed;
            }
            return;
        }

        const t = Math.min((elapsed - startTime.current) / 1.2, 1);
        const eased = 1 - Math.pow(1 - t, 3); // cubic ease out
        progressRef.current = eased;

        const currentH = eased * targetHeight;
        meshRef.current.scale.y = Math.max(currentH, 0.001);
        meshRef.current.position.y = position[1] + (currentH / 2);

        // Subtle idle float after animation
        if (t >= 1) {
            meshRef.current.position.y = position[1] + (targetHeight / 2) + Math.sin(elapsed * 0.8 + delay) * 0.03;
        }
    });

    return (
        <mesh ref={meshRef} position={[position[0], position[1], position[2]]} scale={[1, 0.001, 1]}>
            <boxGeometry args={[0.4, 1, 0.4]} />
            <meshStandardMaterial
                color={color}
                transparent
                opacity={0.85}
                roughness={0.2}
                metalness={0.6}
                envMapIntensity={1}
            />
        </mesh>
    );
};

const GridFloor: React.FC = () => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
            <planeGeometry args={[12, 6]} />
            <meshStandardMaterial color="#00C5CB" transparent opacity={0.04} />
        </mesh>
    );
};

interface ChartSceneProps {
    data: BarData[];
}

const ChartScene: React.FC<ChartSceneProps> = ({ data }) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        // Gentle breathing rotation
        groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.12;
    });

    const maxValue = Math.max(...data.map(d => d.value));
    const maxBarHeight = 2.5;
    const spacing = 1.4;
    const totalWidth = (data.length - 1) * spacing;

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" castShadow />
            <pointLight position={[-3, 4, -3]} intensity={0.5} color="#00C5CB" />
            <pointLight position={[3, 4, 3]} intensity={0.3} color="#D4A843" />

            <GridFloor />

            {data.map((bar, i) => {
                const barHeight = (bar.value / maxValue) * maxBarHeight;
                const x = (i * spacing) - (totalWidth / 2);
                return (
                    <AnimatedBar
                        key={bar.label}
                        position={[x, 0, 0]}
                        targetHeight={barHeight}
                        color={bar.color}
                        delay={i * 0.18}
                    />
                );
            })}
        </group>
    );
};

interface CostBarChartProps {
    data: BarData[];
    title?: string;
    subtitle?: string;
    height?: string;
}

export const CostBarChart: React.FC<CostBarChartProps> = ({
    data,
    title = 'Cost Comparison',
    subtitle = 'Monthly expenses in USD',
    height = '300px',
}) => {
    const [webGLOk, setWebGLOk] = useState<boolean | null>(null);

    useEffect(() => {
        try {
            const canvas = document.createElement('canvas');
            const ok = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
            setWebGLOk(ok);
        } catch {
            setWebGLOk(false);
        }
    }, []);

    if (webGLOk === null) return null;

    const maxValue = Math.max(...data.map(d => d.value));

    if (!webGLOk) {
        // Graceful fallback — CSS bars
        return (
            <div className="my-8 p-6 rounded-2xl border border-brand-100 bg-brand-50">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{subtitle}</p>
                <h4 className="font-heading text-lg font-black text-brand-950 mb-4 uppercase italic">{title}</h4>
                {data.map(bar => (
                    <div key={bar.label} className="mb-3">
                        <div className="flex justify-between text-xs font-bold mb-1">
                            <span className="text-brand-950">{bar.label}</span>
                            <span style={{ color: bar.color }}>${bar.value.toLocaleString()}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100">
                            <div className="h-2 rounded-full transition-all duration-1000" style={{ width: `${(bar.value / maxValue) * 100}%`, backgroundColor: bar.color }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="my-10 relative">
            {/* Glassmorphism container */}
            <div
                className="rounded-3xl overflow-hidden relative"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,197,203,0.06) 0%, rgba(1,24,26,0.04) 100%)',
                    border: '1px solid rgba(0,197,203,0.15)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0,197,203,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
            >
                <div className="px-6 pt-6 pb-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-TEAL mb-1">{subtitle}</p>
                    <h4 className="font-heading text-lg font-black text-brand-950 uppercase italic tracking-tighter">{title}</h4>
                </div>

                <div style={{ height }}>
                    <Canvas
                        camera={{ position: [0, 3, 6], fov: 45 }}
                        gl={{ antialias: true, alpha: true }}
                        dpr={[1, 1.5]}
                    >
                        <Suspense fallback={null}>
                            <ChartScene data={data} />
                        </Suspense>
                    </Canvas>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 px-6 pb-5 pt-1">
                    {data.map(bar => (
                        <div key={bar.label} className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: bar.color }} />
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{bar.label}</span>
                            <span className="text-[10px] font-black text-brand-950">${bar.value.toLocaleString()}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CostBarChart;
