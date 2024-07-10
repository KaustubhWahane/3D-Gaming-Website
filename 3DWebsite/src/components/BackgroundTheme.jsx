import { Loader } from '@react-three/drei';
import * as THREE from 'three';

export default function BackgroundTheme() {
  const container = document.querySelector(".background");
  const loader = new THREE.TextureLoader();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WEBGL1Renderer();
  renderer.setSize(window.innerWidth , window.innerHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.PlaneGeometry();
  const material = new THREE.MeshBasicMaterial({
    color:0xff0000,
    map: Loader.load()
  })

  const mesh = new THREE.Mesh(geometry , material);
  scene.add(mesh);
  camera.position.z = 5;

  return (
    <div>
      
    </div>
  )
}
