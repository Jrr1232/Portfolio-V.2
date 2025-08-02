import { useRef, useEffect } from 'react';
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

export default function Animation() {

    const hasInitialized = useRef(false);

    const containerRef = useRef();

    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1.5, 3000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        camera.position.set(0, 5, 15);


        scene.background = new THREE.Color('rgba(252, 255, 255, 1)');
        const hemiLight = new THREE.HemisphereLight('#FFFFFF', '#757575', 1.7);
        scene.add(hemiLight);

        // Create multiple cubes
        const cubes = [];
        const geo = new THREE.BoxGeometry(2, 2, 2);
        for (let i = 0; i < 10; i++) {
            const mat = new THREE.MeshPhongMaterial({
                color: new THREE.Color('rgba(10, 178, 178, 1)')
            });
            const cube = new THREE.Mesh(geo, mat);
            cube.position.set(i * 6 - 20, 5, -30); // Spread along X axis
            scene.add(cube);
            cubes.push(cube);
        }

        // Resize handler
        function onWindowResize() {
            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height, false);
        }
        window.addEventListener('resize', onWindowResize);
        onWindowResize();

        // Animation loop
        let animId;
        function animate() {
            animId = requestAnimationFrame(animate);
            cubes.forEach(c => {
                c.rotation.x += 0.01;
                c.rotation.y += 0.01;
            });
            renderer.render(scene, camera);
        }
        animate();

        return () => {
            window.removeEventListener('resize', onWindowResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div
            id ="animation-container"
            ref={containerRef}
            style={{ width: '100vw', height: '40vh' }}
        />
    );
} 