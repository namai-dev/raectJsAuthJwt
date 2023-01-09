import React from "react";
import * as THREE from "three";

class My3DComponent extends React.Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    // create a scene, a camera, and a renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    // create a cube and add it to the scene
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // position the camera and render the scene
    camera.position.z = 5;
    renderer.setSize(width, height);
    this.mount.appendChild(renderer.domElement);
    renderer.render(scene, camera);
  }

  render() {
    return (
      <div
        style={{ width: "400px", height: "400px" }}
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default My3DComponent;
