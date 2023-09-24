import "./ThreeDBackground.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React, { useEffect } from "react";

import vs from '../../shaders/vs.glsl';
import fs from '../../shaders/fs.glsl';
const fileToString = (file) => {
  fetch(file)
 .then(r => r.text())
 .then(text => {
  console.log(text)
  return text
})};

//import * as dat from 'lil-gui'

const ThreeDBackground = () => {
  //const gui = new dat.GUI()
  
  // Canvas
  useEffect(() => { 
    const canvas = document.querySelector('.webgl');
  
    // Scene
    const scene = new THREE.Scene()
    
    /**
     * Textures
     */
    const textureLoader = new THREE.TextureLoader()
    
    /**
     * Test mesh
     */
    // Geometry
    const geometry = new THREE.PlaneGeometry(1, 1, 32, 32)
    
    // Material
    const shaderMaterial = new THREE.RawShaderMaterial({
      vertexShader: `
      uniform mat4 projectionMatrix;
      uniform mat4 viewMatrix;
      uniform mat4 modelMatrix;

      attribute vec3 position;

      void main(){
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
      }
      `,
      fragmentShader: `
        precision mediump float;

        void main(){
          gl_FragColor = vec4(0.4297, 0.832, 0.8359, 1.0);
        }
      `
    })
    const material = new THREE.MeshBasicMaterial({
      color: '#828282'
    })
    
    // Mesh
    //const mesh = new THREE.Mesh(geometry, material)
    const mesh = new THREE.Mesh(geometry, shaderMaterial)

    scene.add(mesh)
    
    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    
    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
    
        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
    
        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
    
    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(0.25, - 0.25, 1)
    scene.add(camera)
    
    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    
    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    /**
     * Animate
     */
    const clock = new THREE.Clock()
    
    const tick = () =>
    {
        const elapsedTime = clock.getElapsedTime()
    
        // Update controls
        controls.update()
    
        // Render
        renderer.render(scene, camera)
    
        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }
    
    tick()
  })

  return (
    <div className="background" id="background">
      <canvas id="webglCanvas" className="webgl"></canvas>
    </div>
  );
};

export default ThreeDBackground;