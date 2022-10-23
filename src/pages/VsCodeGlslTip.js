import { useEffect } from "react";

import * as THREE from "three";

import SceneInit from "../SceneInit";

import vertexShaderCode from "./a_vertex.glsl";
import fragmentShaderCode from "./a_fragment.glsl";

// --VS CODE EXTENSTION --> WebGL GLSL Editor
// npm package to so we can import glsl files ->

function VsCodeGlslTip() {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    // define uniform data
    const uniformData = {
      u_time: {
        type: "f",
        value: test.clock.getElapsedTime(),
      },
    };
    const render = () => {
      uniformData.u_time.value = test.clock.getElapsedTime();
      window.requestAnimationFrame(render);
    };
    render();

    const boxGeometry = new THREE.BoxGeometry(24, 4, 24, 24, 4, 24);
    const boxMaterial = new THREE.ShaderMaterial({
      wireframe: true,
      uniforms: uniformData,
      vertexShader: vertexShaderCode,
      fragmentShader: fragmentShaderCode,
    });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    test.scene.add(boxMesh);
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default VsCodeGlslTip;
