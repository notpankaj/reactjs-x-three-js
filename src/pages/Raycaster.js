import { useEffect } from "react";

import * as THREE from "three";

import SceneInit from "../SceneInit";

function App() {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas", 20);
    test.initialize();
    test.animate();

    const addNewBoxMesh = (x, y, z) => {
      const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
      const boxMaterial = new THREE.MeshPhongMaterial({
        color: 0xfafafa,
      });
      const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
      boxMesh.position.set(x, y, z);
      test.scene.add(boxMesh);
    };

    // top rows
    addNewBoxMesh(0, 2, 0);
    addNewBoxMesh(2, 2, 0);
    addNewBoxMesh(-2, 2, 0);
    addNewBoxMesh(0, 2, -2);
    addNewBoxMesh(2, 2, -2);
    addNewBoxMesh(-2, 2, -2);
    addNewBoxMesh(0, 2, 2);
    addNewBoxMesh(2, 2, 2);
    addNewBoxMesh(-2, 2, 2);

    // middle rows
    addNewBoxMesh(0, 0, 0);
    addNewBoxMesh(2, 0, 0);
    addNewBoxMesh(-2, 0, 0);
    addNewBoxMesh(0, 0, -2);
    addNewBoxMesh(2, 0, -2);
    addNewBoxMesh(-2, 0, -2);
    addNewBoxMesh(0, 0, 2);
    addNewBoxMesh(2, 0, 2);
    addNewBoxMesh(-2, 0, 2);

    // bottom rows
    addNewBoxMesh(0, -2, 0);
    addNewBoxMesh(2, -2, 0);
    addNewBoxMesh(-2, -2, 0);
    addNewBoxMesh(0, -2, -2);
    addNewBoxMesh(2, -2, -2);
    addNewBoxMesh(-2, -2, -2);
    addNewBoxMesh(0, -2, 2);
    addNewBoxMesh(2, -2, 2);
    addNewBoxMesh(-2, -2, 2);

    const pointer = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    const onMouseMove = (event) => {
      //   // calculate pointer position in normalized device coordinates
      //   // (-1 to +1) for both components
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(pointer, test.camera);
      const intersects = raycaster.intersectObjects(test.scene.children);
      for (let i = 0; i < intersects.length; i++) {
        console.log(intersects);
      }
      // change color of objects intersecting the raycaster
      // for (let i = 0; i < intersects.length; i++) {
      //   intersects[i].object.material.color.set(0xff0000);
      // }
      //   // change color of the closest object intersecting the raycaster
      if (intersects.length > 0) {
        intersects[0].object.material.color.set(0xff0000);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
