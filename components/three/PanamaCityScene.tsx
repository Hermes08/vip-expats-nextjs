'use client';

import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BuildingProps {
    position: [number, number, number];
    height: number;
    width?: number;
    depth?: number;
    color?: string;
    glassColor?: string;
    delay?: number;
}

const Building: React.FC<BuildingProps> = ({
    position, height, width = 0.5, depth = 0.5, color = '#1a2a3a', glassColor = '#00C5CB', delay = 0
}) => {
    const ref = useRef<THREE.Group>(null);
    const progressRef = useRef(0);
    const started = useRef(false);
    const startTime = useRef(0);

    useFrame((state) => {
        if (!ref.current) return;
        const elapsed = state.clock.getElapsedTime();

        if (!started.current) {
            if (elapsed > delay) {
                started.current = true;
                startTime.current = elapsed;
            } else {
                ref.current.scale.y = 0.001;
                return;
            }
        }

        const t = Math.min((elapsed - startTime.current) / 1.5, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        ref.current.scale.y = Math.max(eased, 0.001);
        ref.current.position.y = position[1] - (height / 2) * (1 - eased);
    });

    const windowRows = Math.floor(height * 4);
    const windowCols = Math.floor(width * 6);

    return (
        <group ref={ref} position={position}>
            {/* Main structure */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[width, height, depth]} />
                <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
            </mesh>
            {/* Glass facade strips */}
            <mesh position={[width / 2 + 0.001, 0, 0]}>
                <boxGeometry args={[0.02, height * 0.95, depth * 0.85]} />
                <meshStandardMaterial color={glassColor} transparent opacity={0.3} roughness={0.05} metalness={0.9} />
            </mesh>
            {/* Antenna on tall buildings */}
            {height > 2 && (
                <mesh position={[0, height / 2 + 0.2, 0]}>
                    <cylinderGeometry args={[0.01, 0.01, 0.4, 4]} />
                    <meshStandardMaterial color="#888" metalness={0.9} />
                </mesh>
            )}
        </group>
    );
};

// Water reflection
const WaterReflection: React.FC = () => {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        const mat = ref.current.material as THREE.MeshStandardMaterial;
        mat.opacity = 0.55 + Math.sin(t * 0.5) * 0.05;
    });

    return (
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 1.5]}>
            <planeGeometry args={[14, 3, 1, 1]} />
            <meshStandardMaterial
                color="#00C5CB"
                transparent
                opacity={0.55}
                roughness={0.05}
                metalness={0.4}
            />
        </mesh>
    );
};

// City lights particles
const CityLights: React.FC = () => {
    const ref = useRef<THREE.Points>(null);
    const count = 80;

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 10;
            arr[i * 3 + 1] = Math.random() * 3 - 1.5;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 2;
        }
        return arr;
    }, []);

    const colors = useMemo(() => {
        const arr = new Float32Array(count * 3);
        const palette = [[0, 0.77, 0.80], [0.83, 0.66, 0.26], [1, 1, 1]];
        for (let i = 0; i < count; i++) {
            const c = palette[i % 3];
            arr[i * 3] = c[0];
            arr[i * 3 + 1] = c[1];
            arr[i * 3 + 2] = c[2];
        }
        return arr;
    }, []);

    useFrame((state) => {
        if (!ref.current) return;
        const mat = ref.current.material as THREE.PointsMaterial;
        mat.opacity = 0.6 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.2;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} args={[positions, 3]} />
                <bufferAttribute attach="attributes-color" count={count} args={[colors, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.04} vertexColors transparent opacity={0.7} sizeAttenuation depthWrite={false} />
        </points>
    );
};

const PanamaCityInner: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.getElapsedTime();
        groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.12;
    });

    const buildings = [
        // Iconic towers (based loosely on Panama City skyline proportions)
        { pos: [-0.2, 0, -1] as [number, number, number], h: 3.8, w: 0.35, d: 0.35, color: '#1a2a3a', glass: '#00C5CB', delay: 0.1 },
        { pos: [0.7, 0, -1.2] as [number, number, number], h: 3.2, w: 0.4, d: 0.4, color: '#152030', glass: '#D4A843', delay: 0.2 },
        { pos: [-1, 0, -1] as [number, number, number], h: 2.8, w: 0.5, d: 0.4, color: '#1e2e40', glass: '#00C5CB', delay: 0.3 },
        { pos: [1.5, 0, -1.3] as [number, number, number], h: 2.4, w: 0.45, d: 0.45, color: '#1a2535', glass: '#ffffff', delay: 0.4 },
        { pos: [-1.8, 0, -1.5] as [number, number, number], h: 2.0, w: 0.4, d: 0.4, color: '#121e28', glass: '#00C5CB', delay: 0.5 },
        { pos: [2.3, 0, -1.4] as [number, number, number], h: 1.8, w: 0.5, d: 0.5, color: '#18252f', glass: '#D4A843', delay: 0.6 },
        { pos: [-2.5, 0, -2] as [number, number, number], h: 1.5, w: 0.6, d: 0.6, color: '#1c2830', glass: '#88dddd', delay: 0.7 },
        { pos: [0.3, 0, -2] as [number, number, number], h: 1.6, w: 0.55, d: 0.55, color: '#1a2535', glass: '#00C5CB', delay: 0.8 },
        { pos: [3, 0, -1.8] as [number, number, number], h: 1.3, w: 0.5, d: 0.5, color: '#192230', glass: '#D4A843', delay: 0.9 },
        { pos: [-3, 0, -2] as [number, number, number], h: 1.2, w: 0.5, d: 0.5, color: '#1a2535', glass: '#88dddd', delay: 1.0 },
        // Mid-ground fill
        { pos: [-0.8, 0, -2.5] as [number, number, number], h: 1.0, w: 0.7, d: 0.6, color: '#14202a', glass: '#00C5CB', delay: 1.1 },
        { pos: [1.0, 0, -2.5] as [number, number, number], h: 0.9, w: 0.7, d: 0.65, color: '#16222c', glass: '#D4A843', delay: 1.2 },
        { pos: [3.5, 0, -2.5] as [number, number, number], h: 0.8, w: 0.6, d: 0.6, color: '#131e28', glass: '#88dddd', delay: 1.3 },
        { pos: [-3.5, 0, -2.5] as [number, number, number], h: 0.75, w: 0.65, d: 0.65, color: '#1a2535', glass: '#00C5CB', delay: 1.4 },
    ];

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 10, 5]} intensity={0.8} color="#ffe8cc" />
            <pointLight position={[0, 5, 2]} intensity={0.6} color="#00C5CB" />
            <pointLight position={[-4, 3, 0]} intensity={0.3} color="#D4A843" />
            <pointLight position={[4, 3, 0]} intensity={0.3} color="#4488ff" />

            {/* Night sky */}
            <mesh position={[0, 4, -10]}>
                <planeGeometry args={[30, 14]} />
                <meshStandardMaterial color="#01181A" side={THREE.BackSide} />
            </mesh>

            {/* Ground / road */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
                <planeGeometry args={[14, 6]} />
                <meshStandardMaterial color="#0d1a1e" roughness={0.9} />
            </mesh>

            {buildings.map((b, i) => (
                <Building
                    key={i}
                    position={[b.pos[0], b.pos[1] - 1.5 + b.h / 2, b.pos[2]]}
                    height={b.h}
                    width={b.w}
                    depth={b.d}
                    color={b.color}
                    glassColor={b.glass}
                    delay={b.delay}
                />
            ))}

            <WaterReflection />
            <CityLights />
        </group>
    );
};

export const PanamaCityScene: React.FC = () => {
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
                    background: 'linear-gradient(160deg, rgba(1,24,26,0.92) 0%, rgba(0,30,50,0.88) 100%)',
                    border: '1px solid rgba(0,197,203,0.15)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,197,203,0.08)',
                }}
            >
                <div className="px-6 pt-5 pb-1 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-TEAL animate-pulse" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-TEAL">Panama City Skyline • Pacific Coast</p>
                </div>
                <div style={{ height: '300px' }}>
                    <Canvas
                        camera={{ position: [0, 1.5, 7], fov: 50 }}
                        gl={{ antialias: true, alpha: true }}
                        dpr={[1, 1.5]}
                    >
                        <Suspense fallback={null}>
                            <PanamaCityInner />
                        </Suspense>
                    </Canvas>
                </div>
                <div className="px-6 pb-4">
                    <p className="text-[10px] text-slate-500 font-medium italic">Latin America's most modern skyline • Low-poly 3D night scene</p>
                </div>
            </div>
        </div>
    );
};

export default PanamaCityScene;
