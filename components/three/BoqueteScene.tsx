'use client';

import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating mist particle
const MistParticles: React.FC = () => {
    const ref = useRef<THREE.Points>(null);
    const count = 120;

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 8;
            arr[i * 3 + 1] = Math.random() * 2;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
        }
        return arr;
    }, []);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        const pos = ref.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
            pos[i * 3] += Math.sin(t * 0.1 + i) * 0.002;
            pos[i * 3 + 1] += 0.001;
            if (pos[i * 3 + 1] > 3) pos[i * 3 + 1] = 0;
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.15} color="#c8f0f0" transparent opacity={0.25} sizeAttenuation depthWrite={false} />
        </points>
    );
};

// Low-poly mountain
const Mountain: React.FC<{ position: [number, number, number]; scale?: number; color?: string }> = ({
    position, scale = 1, color = '#1a5c3a'
}) => {
    const ref = useRef<THREE.Mesh>(null);
    const geo = useMemo(() => {
        const g = new THREE.ConeGeometry(1, 2, 6);
        // Randomize vertices slightly for low-poly feel
        const pos = g.attributes.position.array as Float32Array;
        for (let i = 0; i < pos.length; i += 3) {
            pos[i] += (Math.random() - 0.5) * 0.15;
            pos[i + 2] += (Math.random() - 0.5) * 0.15;
        }
        g.computeVertexNormals();
        return g;
    }, []);

    return (
        <mesh ref={ref} geometry={geo} position={position} scale={[scale, scale, scale]}>
            <meshStandardMaterial color={color} flatShading roughness={0.8} metalness={0.1} />
        </mesh>
    );
};

// Tree (simple pine)
const Tree: React.FC<{ position: [number, number, number] }> = ({ position }) => (
    <group position={position}>
        <mesh position={[0, 0.4, 0]}>
            <coneGeometry args={[0.15, 0.5, 6]} />
            <meshStandardMaterial color="#1a6b35" flatShading roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.3, 4]} />
            <meshStandardMaterial color="#5c3d1e" flatShading />
        </mesh>
    </group>
);

// Coffee plant (simple round bush)
const CoffeePlant: React.FC<{ position: [number, number, number] }> = ({ position }) => (
    <mesh position={position}>
        <sphereGeometry args={[0.12, 5, 4]} />
        <meshStandardMaterial color="#2d6a2d" flatShading roughness={0.95} />
    </mesh>
);

const BoqueteInner: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.getElapsedTime();
        groupRef.current.rotation.y = Math.sin(t * 0.12) * 0.18;
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[4, 8, 3]} intensity={1.1} color="#ffe4b5" />
            <pointLight position={[-4, 3, -2]} intensity={0.4} color="#a8d8b0" />
            <fogExp2 args={['#d0ede8', 0.08]} />

            {/* Ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
                <planeGeometry args={[20, 12]} />
                <meshStandardMaterial color="#2d5a27" roughness={1} />
            </mesh>

            {/* Background mountains */}
            <Mountain position={[-3, 0.2, -3]} scale={2.2} color="#1a3d28" />
            <Mountain position={[0, 0.5, -4]} scale={2.8} color="#1f4a30" />
            <Mountain position={[3.5, 0.1, -3.5]} scale={2} color="#162e1e" />
            <Mountain position={[-5, -0.2, -4]} scale={1.8} color="#1a3d28" />

            {/* Mid mountains with snow caps */}
            <Mountain position={[1.5, 0.8, -2.5]} scale={1.6} color="#2d5a3d" />
            <Mountain position={[-1.5, 0.6, -2.2]} scale={1.4} color="#2d5a3d" />

            {/* Snow caps */}
            <mesh position={[0, 2.5, -4]} >
                <coneGeometry args={[0.6, 0.8, 6]} />
                <meshStandardMaterial color="#e8f4f4" roughness={0.9} />
            </mesh>

            {/* Trees foreground */}
            {[-2, -1.2, -0.5, 0.5, 1.2, 2].map((x, i) => (
                <Tree key={i} position={[x, -0.7 + (i % 2) * 0.1, -1 + (i % 3) * 0.3]} />
            ))}

            {/* Coffee plants */}
            {[
                [-1.5, -0.9, 0.5], [1.8, -0.9, 0.3], [-0.5, -0.9, 0.8],
                [0.8, -0.9, 0.6], [-2, -0.9, 0.2], [2.5, -0.9, 0.5]
            ].map(([x, y, z], i) => (
                <CoffeePlant key={i} position={[x, y, z]} />
            ))}

            <MistParticles />
        </group>
    );
};

export const BoqueteScene: React.FC = () => {
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
                    background: 'linear-gradient(160deg, rgba(29,94,63,0.08) 0%, rgba(0,197,203,0.06) 100%)',
                    border: '1px solid rgba(0,197,203,0.12)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 40px rgba(0,197,203,0.07), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
            >
                <div className="px-6 pt-5 pb-1 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-TEAL animate-pulse" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-TEAL">Boquete, Chiriquí • 1,200m elevation</p>
                </div>
                <div style={{ height: '280px' }}>
                    <Canvas
                        camera={{ position: [0, 1.5, 5.5], fov: 50 }}
                        gl={{ antialias: true, alpha: true }}
                        dpr={[1, 1.5]}
                    >
                        <Suspense fallback={null}>
                            <BoqueteInner />
                        </Suspense>
                    </Canvas>
                </div>
                <div className="px-6 pb-4">
                    <p className="text-[10px] text-slate-400 font-medium italic">Eternal spring • Coffee highlands • Low-poly 3D render</p>
                </div>
            </div>
        </div>
    );
};

export default BoqueteScene;
