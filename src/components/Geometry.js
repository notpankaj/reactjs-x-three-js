import React, { useEffect } from "react";
import * as THREE from "three";
import SceneInit from "../SceneInit";
import { TeapotGeometry } from "three/examples/jsm/geometries/TeapotGeometry";
const Geometry = () => {
  useEffect(() => {
    const test = new SceneInit("canvasElement", 5);
    test.initialize();
    test.animate();

    // PART-1
    const geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 16);
    const material = new THREE.MeshNormalMaterial({ wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -2;
    test.scene.add(cube);

    const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 6, 16);
    const cylinderMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.x = 0;
    test.scene.add(cylinder);

    // PART-2
    const teapotGeometry = new TeapotGeometry(0.5, 8);
    const teaPotMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    const teaPotMesh = new THREE.Mesh(teapotGeometry, teaPotMaterial);
    teaPotMesh.position.x = 2;
    test.scene.add(teaPotMesh);
  }, []);

  return (
    <div>
      <canvas id="canvasElement" />
    </div>
  );
};

export default Geometry;
