import { useEffect } from "react";

import * as THREE from "three";

import { TTFLoader } from "three/examples/jsm/loaders/TTFLoader";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import SceneInit from "../SceneInit";

function Font() {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    // part 1 - typeface.json font loader
    const fontLoader = new FontLoader();
    // fontLoader.load(
    //   "node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json",
    //   (droidFont) => {
    //     const textGeometry = new TextGeometry("hello", {
    //       size: 12,
    //       height: 4,
    //       font: droidFont,
    //     });
    //     const textMaterial = new THREE.MeshNormalMaterial();
    //     const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    //     textMesh.position.x = -45;
    //     textMesh.position.y = 0;
    //     test.scene.add(textMesh);
    //   }
    // );

    // part 2 - true type font loader
    const ttfLoader = new TTFLoader();
    ttfLoader.load("fonts/jet_brains_mono_regular.ttf", (json) => {
      // First parse the font.
      const jetBrainsFont = fontLoader.parse(json);
      // Use parsed font as normal.
      const textGeometry = new TextGeometry("hello world", {
        height: 1,
        size: 1,
        font: jetBrainsFont,
      });
      const textMaterial = new THREE.MeshNormalMaterial();
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.x = -10;
      textMesh.position.y = -0;
      test.scene.add(textMesh);
    });
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default Font;
