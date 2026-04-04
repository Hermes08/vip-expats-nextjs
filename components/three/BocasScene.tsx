'use client';

import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Ocean waves using vertex animation
const OceanWave: React.FC = () => {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        const geo = ref.current.geometry as THREE.PlaneGeometry;
        const pos = geo.attributes.position.array as Float32Array;
        const w = 32;
        const h = 16;
        for (let i = 0; i <= h; i++) {
            for (let j = 0; j <= w; j++) {
                const idx = (i * (w + 1) + j) * 3;
                const x = pos[idx];
                const z = pos[idx + 2];
                pos[idx + 1] = Math.sin(x * 0.8 + t * 1.2) * 0.08 + Math.sin(z * 0.6 + t * 0.9) * 0.06;
            }
        }
        geo.attributes.position.needsUpdate = true;
        geo.computeVertexNormals();
    });

    return (
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]}>
            <planeGeometry args={[16, 10, 32, 16]} />
            <meshStandardMaterial color="#0a8aac" roughness={0.1} metalness={0.3} transparent opacity={0.88} />
        </mesh>
    );
};

// Tropical island
const Island: React.FC<{ position: [number, number, number]; size?: number }> = ({ position, size = 1 }) => {
    return (
        <group position={position}>
            {/* Sand base */}
            <mesh position={[0, -0.05, 0]}>
                <cylinderGeometry args={[size * 0.8, size, 0.25, 7]} />
                <meshStandardMaterial color="#e8d5a3" roughness={1} flatShading />
            </mesh>
            {/* Vegetation */}
            <mesh position={[0, 0.25, 0]}>
                <sphereGeometry args={[size * 0.5, 5, 4]} />
                <meshStandardMaterial color="#1a6b35" roughness={0.9} flatShading />
            </mesh>
            {/* Palm trunk */}
            <mesh position={[size * 0.1, 0.4, 0]} rotation={[0, 0, 0.2]}>
                <cylinderGeometry args={[0.04 * size, 0.06 * size, size * 0.8, 5]} />
                <meshStandardMaterial color="#6b4c1e" flatShading />
            </mesh>
            {/* Palm fronds */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <mesh
                    key={i}
                    position={[
                        Math.cos(deg * Math.PI / 180) * 0.3 * size,
                        0.9 * size,
                        Math.sin(deg * Math.PI / 180) * 0.3 * size
                    ]}
                    rotation={[0.5, deg * Math.PI / 180, 0]}
                >
                    <coneGeometry args={[0.18 * size, 0.5 * size, 4]} />
                    <meshStandardMaterial color="#2d8a3a" flatShading roughness={0.9} />
                </mesh>
            ))}
        </group>
    );
};

// Overwater bungalow
const Bungalow: React.FC<{ position: [number, number, number] }> = ({ position }) => (
    <group position={position}>
        {/* Platform */}
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.7, 0.08, 0.7]} />
            <meshStandardMaterial color="#c4a56b" roughness={0.9} />
        </mesh>
        {/* Walls */}
        <mesh position={[0, 0.22, 0]}>
            <boxGeometry args={[0.6, 0.36, 0.6]} />
            <meshStandardMaterial color="#f0e8d0" roughness={0.8} />
        </mesh>
        {/* Roof */}
        <mesh position={[0, 0.48, 0]}>
            <coneGeometry args={[0.45, 0.3, 4]} />
            <meshStandardMaterial color="#8b5e3c" flatShading roughness={0.95} />
        </mesh>
        {/* Stilts */}
        {[[-0.25, -0.25], [-0.25, 0.25], [0.25, -0.25], [0.25, 0.25]].map(([x, z], i) => (
            <mesh key={i} position={[x, -0.25, z]}>
                <cylinderGeometry args={[0.025, 0.025, 0.5, 4]} />
                <meshStandardMaterial color="#7a5230" />
            </mesh>
        ))}
    </group>
);

// Sun / ambient glow
const TropicalSun: React.FC = () => {
    const ref = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        ref.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.03);
    });
    return (
        <mesh ref={ref} position={[4, 3.5, -5]}>
            <sphereGeometry args={[0.4, 12, 8]} />
            <meshStandardMaterial color="#ffe87a" emissive="#ffcc00" emissiveIntensity={1.5} />
        </mesh>
    );
};

const BocasInner: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.getElapsedTime();
        groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.15;
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 8, 4]} intensity={1.4} color="#fffae0" />
            <pointLight position={[-3, 3, 2]} intensity={0.4} color="#00d0e8" />

            {/* Sky gradient plane in background */}
            <mesh position={[0, 2, -8]}>
                <planeGeometry args={[24, 10]} />
                <meshStandardMaterial color="#87ceeb" side={THREE.BackSide} />
            </mesh>

            <OceanWave />

            {/* Islands */}
            <Island position={[-2.5, -0.4, -2]} size={1.1} />
            <Island position={[2.2, -0.4, -2.5]} size={0.8} />
            <Island position={[0.2, -0.4, -4]} size={1.4} />
            <Island position={[-4.5, -0.4, -3]} size={0.7} />

            {/* Overwater bungalows */}
            <Bungalow position={[0.8, -0.3, -1]} />
            <Bungalow position={[-0.5, -0.3, -1.4]} />
            <Bungalow position={[2, -0.3, -0.8]} />

            <TropicalSun />
        </group>
    );
};

export const BocasScene: React.FC = () => {
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

    if (!webGLOk) return null;

    return (
        <div className="my-10 relative">
            <div
                className="rounded-3xl overflow-hidden relative"
                style={{
                    background: 'linear-gradient(160deg, rgba(0,130,172,0.08) 0%, rgba(135,206,235,0.06) 100%)',
                    border: '1px solid rgba(0,197,203,0.14)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 40px rgba(0,130,172,0.09), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
            >
                <div className="px-6 pt-5 pb-1 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00d0e8] animate-pulse" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-TEAL">Bocas del Toro Archipelago • Caribbean Panama</p>
                </div>
                <div style={{ height: '280px' }}>
                    <Canvas
                        camera={{ position: [0, 2.5, 7], fov: 48 }}
                        gl={{ antialias: true, alpha: true }}
                        dpr={[1, 1.5]}
                    >
                        <Suspense fallback={null}>
                            <BocasInner />
                        </Suspense>
                    </Canvas>
                </div>
                <div className="px-6 pb-4">
                    <p className="text-[10px] text-slate-400 font-medium italic">Caribbean islands • Overwater bungalows • Low-poly 3D render</p>
                </div>
            </div>
        </div>
    );
};

export default BocasScene;
