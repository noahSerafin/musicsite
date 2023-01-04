import "./ThreeDBackground.scss";
import {useLocation} from "react-router-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React, { useState } from "react";
//import dat from "dat.gui";

const ThreeDBackground = () => {
  window.addEventListener("load", init, false);
  var [currentPage, setCurrentPage] = useState();
  useLocation();
 
  function init() {
    createWorld();
    //createPrimitive();
    createParticles();
    //pageListen();
    //createGUI();
    createSphere();
    animation();
  } 

  var Theme = { _black: 0x000000 };

  //--------------------------------------------------------------------

  var scene, camera, renderer, container;
  var start = Date.now();
  var _width, _height;
  function createWorld() {
    _width = window.innerWidth;
    _height = window.innerHeight;
    //---s
    scene = new THREE.Scene();
    //scene.fog = new THREE.Fog(Theme._darkred, 8, 20);
    scene.background = new THREE.Color(Theme._black);
    //---
    camera = new THREE.PerspectiveCamera(55, _width / _height, 1, 1000);
    camera.position.z = 12;
    //---
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(_width, _height);
    //---
    container = document.getElementById("container");
    container.appendChild(renderer.domElement);
    //---
    window.addEventListener("resize", onWindowResize, false);
  }

  function onWindowResize() {
    _width = window.innerWidth;
    _height = window.innerHeight;
    renderer.setSize(_width, _height);
    camera.aspect = _width / _height;
    camera.updateProjectionMatrix();
    console.log("- resize -");
  }

  //--------------------------------------------------------------------
  
    var particlesMesh;
    function createParticles() {
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCnt = 5000;
      const posArray = new Float32Array(particlesCnt * 3);

      for (let i = 0; i < particlesCnt * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
        //console.log('particles!')
      }
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );
      const particlesMaterial = new THREE.PointsMaterial({
          size: 0.005,
         //map: pic,
         //transparent: true,
         //color: 'blue'
       });
      particlesMesh = new THREE.Points(
          particlesGeometry,
          particlesMaterial
      );
      particlesMesh.position.z = 10;
      scene.add(particlesMesh)
    }
    function createSphere(){
        const sphereGeometry = new THREE.SphereGeometry(50, 20, 20);
        const sphereMat = new THREE.MeshBasicMaterial();
        sphereMat.color = new THREE.Color("rgb(214, 35, 41)")
        const sphere = new THREE.Mesh(sphereGeometry, sphereMat);
        scene.add(sphere);
    };
    
    

  //--------------------------------------------------------------------

  /*useEffect(() => { 
    //page listener 
      const url = window.location.href;
      const urlEnd = url.substring(url.lastIndexOf('/') + 1);
      setCurrentPage(currentPage = urlEnd)
  });*/

  const animateParticles = (event) => {
    mouseY = event.clientY;
    mouseX = event.clientX;
  };
  document.addEventListener("mousemove", animateParticles);
    let mouseX = 0;
    let mouseY = 0
  const clock = new THREE.Clock();
  function animation() {
    requestAnimationFrame(animation);
    const elapsedTime = clock.getElapsedTime();
    particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008);
    particlesMesh.rotation.x = mouseY * (elapsedTime * 0.00008);

    var performance = Date.now() * 0.003;

    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }

  return (
    <div className="background" id="container">
      <canvas id="webglCanvas" className="webgl"></canvas>
    </div>
  );
};

export default ThreeDBackground;