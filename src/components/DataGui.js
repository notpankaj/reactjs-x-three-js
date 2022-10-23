import React, { useEffect, useState } from "react";
import * as THREE from "three";
import SceneInit from "../SceneInit";
import { GUI } from "dat.gui";

const DataGui = () => {
  useEffect(() => {
    const test = new SceneInit("canvasElement", 100);
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(24, 24, 24);
    const boxMaterial = new THREE.MeshPhongMaterial({ color: "0xff0000" });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    test.scene.add(boxMesh);

    // PART - 1 initialize
    const gui = new GUI();

    // PART - 2 changing Gemetry (scale, rotation)
    // gui.add(boxMesh.rotation, "x", 0, Math.PI).name("Rotate X Axis");
    // gui.add(boxMesh.rotation, "y", 0, Math.PI).name("Rotate Y Axis");
    // gui.add(boxMesh.rotation, "z", 0, Math.PI).name("Rotate Z Axis");
    // gui.add(boxMesh.scale, "x", 0, 2).name("scale X Axis");
    // gui.add(boxMesh.scale, "y", 0, 2).name("scale Y Axis");
    // gui.add(boxMesh.scale, "z", 0, 2).name("scale Z Axis");

    // PART - 3 updating   Material (color,wireframe)
    // const materialParams = {
    //   boxMeshColor: boxMesh.material.color.getHex(),
    // };
    // gui.add(boxMesh.material, "wireframe");
    // gui
    //   .add(materialParams, "boxMeshColor")
    //   .onChange((value) => boxMesh.material.color.set(value));

    // PART - 4 Refactor Gui with Folder

    const geometryFolder = gui.addFolder("Mesh Geometry");
    geometryFolder.open();
    const rotationFolder = geometryFolder.addFolder("Rotation");
    rotationFolder.add(boxMesh.rotation, "x", 0, Math.PI).name("Rotate X Axis");
    rotationFolder.add(boxMesh.rotation, "y", 0, Math.PI).name("Rotate Y Axis");
    rotationFolder.add(boxMesh.rotation, "z", 0, Math.PI).name("Rotate Z Axis");
    const scaleFolder = geometryFolder.addFolder("Scale");
    scaleFolder.add(boxMesh.scale, "x", 0, 2).name("scale X Axis");
    scaleFolder.add(boxMesh.scale, "y", 0, 2).name("scale Y Axis");
    scaleFolder.add(boxMesh.scale, "z", 0, 2).name("scale Z Axis");
    scaleFolder.open();

    const materialFolder = gui.addFolder("Mesh Material");
    const materialParams = {
      boxMeshColor: boxMesh.material.color.getHex(),
    };
    materialFolder.add(boxMesh.material, "wireframe");
    materialFolder
      .add(materialParams, "boxMeshColor")
      .onChange((value) => boxMesh.material.color.set(value));

    // Destroy the GUI on reload to prevent multiple stale UI from being displayed on screen.
    return () => {
      gui.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id="canvasElement" />
    </div>
  );
};

export default DataGui;
