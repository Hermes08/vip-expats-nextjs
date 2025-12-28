'use client';

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';

const FallingGoldPoints: React.FC = () => {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 3000;

    // Generate positions and random velocities
    const { positions, velocities } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const vel = new Float32Array(count);
        const spreadX = 30;
        const spreadY = 30;

        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * spreadX;     // x
            pos[i * 3 + 1] = (Math.random() - 0.5) * spreadY; // y
            pos[i * 3 + 2] = (Math.random() * 10) - 5;       // z depth

            vel[i] = Math.random() * 0.02 + 0.01; // Random falling speed
        }
        return { positions: pos, velocities: vel };
    }, []);

    useFrame(() => {
        if (!pointsRef.current) return;

        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            // Update Y position (falling down)
            positions[i * 3 + 1] -= velocities[i];

            // Reset to top if it falls below a threshold
            if (positions[i * 3 + 1] < -15) {
                positions[i * 3 + 1] = 15;
            }
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Gentle overall rotation
        pointsRef.current.rotation.y += 0.0005;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="#D4AF37" // Brand GOLD
                transparent
                opacity={0.9}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

export const GoldParticles: React.FC = () => {
    // Only render if reduced motion is NOT preferred
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                gl={{ antialias: false, alpha: true }}
                dpr={[1, 1.5]}
            >
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                    <FallingGoldPoints />
                </Suspense>
            </Canvas>
        </div>
    );
};
