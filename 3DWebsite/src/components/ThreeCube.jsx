import { useEffect } from 'react';
import * as THREE from 'three';

const ThreeCube = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.5, 10); 
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(100, 100); 
    document.getElementById('three-container').appendChild(renderer.domElement);

    // Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Camera
    camera.position.z = 2; 

    // Animation Loop
    const animate = function () {
      requestAnimationFrame(animate);

      // Cube rotation
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div id="three-container" className="w-20"></div>
  );
};

export default ThreeCube;
