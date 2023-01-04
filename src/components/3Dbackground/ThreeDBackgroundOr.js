import {useLocation} from "react-router-dom";
import "./ThreeDBackground.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React, { useState, useEffect } from "react";
import img1 from "../../assets/img/Asset20n.png";
import img2 from "../../assets/img/Asset21n.png";
import img3 from "../../assets/img/Asset22n.png";
import img4 from "../../assets/img/Asset23n.png";
import img5 from "../../assets/img/Asset25n.png";
import img6 from "../../assets/img/knAlt2.png"
import { PlaneGeometry } from "three";
import { DoubleSide } from "three";

const ThreeDBackground = () => {  
  //var [currentPage, setCurrentPage] = useState();
  useLocation();
  useEffect(() => { 
    //page listener 
      const url = window.location.href;
      const urlEnd = url.substring(url.lastIndexOf('/') + 1);
      //setCurrentPage(currentPage = urlEnd)

    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // Scene
    const scene = new THREE.Scene();

    // Objects
    //const geometry = new THREE.TorusGeometry( .8, .3, 18, 100 );
    const geometry = new THREE.SphereGeometry(1, 24, 16, 1);
    
    const imgGeometry =  new THREE.PlaneGeometry(0.5, 0.5);

    // Texture Loader
    const loader = new THREE.TextureLoader()
    const tex1 = loader.load(img1)
    const tex2 = loader.load(img2)
    const tex3 = loader.load(img3)
    const tex4 = loader.load(img4)
    const tex5 = loader.load(img5)
    const tex6 = loader.load(img6)
    const mat1 = new THREE.MeshBasicMaterial({map: tex1});
    const mat2 = new THREE.MeshBasicMaterial({map: tex2});
    const mat3 = new THREE.MeshBasicMaterial({map: tex3});
    const mat4 = new THREE.MeshBasicMaterial({map: tex4});
    const mat5 = new THREE.MeshBasicMaterial({map: tex5});
    const mat6 = new THREE.MeshBasicMaterial({map: tex6});

    // Materials
    /*const shadowMaterial = new THREE.MeshPhongMaterial({
        color: 0x5b5b5b
      //transparent: false
    });*/

    const  material = new THREE.MeshBasicMaterial({
        color: "rgb(214, 35, 41)",
        wireframe: true
    });

   

    // Mesh
    const sphere = new THREE.Mesh(geometry, material);
    //sphere.receiveShadow = true;
    //sphere.castShadow = true;
   
    //particlesMesh.castShadow = true;
    //sphere.rotation.x = Math.PI / 2
    sphere.position.z = 0;
    sphere.position.x = -0;
    sphere.position.y = -0;
    
    
   
    //scene.add(particlesMesh);   
    scene.add(sphere)

    //planes
    var planes = []
    const plane1 = new THREE.Mesh(imgGeometry, mat1)
    planes.push(plane1)
    const plane2 = new THREE.Mesh(imgGeometry, mat2)
    planes.push(plane2)
    const plane3 = new THREE.Mesh(imgGeometry, mat3)
    planes.push(plane3)
    const plane4 = new THREE.Mesh(imgGeometry, mat4)
    planes.push(plane4)
    const plane5 = new THREE.Mesh(imgGeometry, mat5)
    planes.push(plane5)
    const plane6 = new THREE.Mesh(imgGeometry, mat6)
    planes.push(plane6)
    for (let i = 0; i < planes.length; i++) {
      //const plane = planes[i];
      planes[i].material.side = DoubleSide
    }

    scene.add(plane1)
    scene.add(plane2)
    scene.add(plane3)
    scene.add(plane4)
    scene.add(plane5)
    scene.add(plane6)

    // Lights

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));      
    });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0.1;
    camera.position.z = 1.9;
    camera.rotateX(0.01);
    scene.add(camera);

    // Controls
    //const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color("#000"), 1);
    //renderer.shadowMap.enabled = true;

    //mouse
    const animateParticles = (event) => {
      mouseY = event.clientY;
      mouseX = event.clientX;
    };

    document.addEventListener("mousemove", animateParticles);
    let mouseX = 0;
    let mouseY = 0;

    let mouseDown = false;
    //const sphereMat = new THREE.MeshNormalMaterial({ wireframe: true});

    const catchMouse = () => {
      //sphere.material = sphereMat;
      mouseDown = true;
    };
    const stopMouse = () => {
      //sphere.material = THREE.PointsMaterial
      mouseDown = false;
    };
    document.addEventListener("mousedown", catchMouse);
    document.addEventListener("mouseup", stopMouse);

    /**
     * Animate
     */

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update objects
      sphere.rotation.y = 0.9 * elapsedTime;
      if (mouseDown) {
        
      } else {
        sphere.rotation.y = 0.9 * elapsedTime;
      }
      sphere.rotation.y = mouseX * (elapsedTime * 0.00006);
      sphere.rotation.x = mouseY * (elapsedTime * 0.00006);
      //particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008);
      //particlesMesh.rotation.x = mouseY * (elapsedTime * 0.00008);
      /*for (let i = 0; i < planes.length; i++) {
        //const plane = planes[i];
        planes[i].position.x = 1 * Math.sin(elapsedTime + [i]);
        planes[i].position.z = 1 * Math.cos(elapsedTime + [i]);
        planes[i].rotation.y = 1 * (elapsedTime + [i]);
        console.log([i])
      }*/
      const slowedTime = elapsedTime * 0.5;
      
      plane1.position.x = 1 * Math.sin(slowedTime);
      plane1.position.z = 1 * Math.cos(slowedTime);
      plane1.rotation.y = 1 * slowedTime;//Math.sin(elapsedTime);// + 1 * Math.cos(elapsedTime);
      plane2.position.x = 1 * Math.sin(slowedTime +1);
      plane2.position.z = 1 * Math.cos(slowedTime +1);
      plane2.rotation.y = 1 * (slowedTime + 1);
      plane3.position.x = 1 * Math.sin(slowedTime +2);
      plane3.position.z = 1 * Math.cos(slowedTime +2);
      plane3.rotation.y = 1 * (slowedTime + 2);
      plane4.position.x = 1 * Math.sin(slowedTime +3);
      plane4.position.z = 1 * Math.cos(slowedTime +3);
      plane4.rotation.y = 1 * (slowedTime + 3);
      plane5.position.x = 1 * Math.sin(slowedTime +4);
      plane5.position.z = 1 * Math.cos(slowedTime +4);
      plane5.rotation.y = 1 * (slowedTime + 4);
      plane6.position.x = 1 * Math.sin(slowedTime +5);
      plane6.position.z = 1 * Math.cos(slowedTime +5);
      plane6.rotation.y = 1 * (slowedTime + 5);
      

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }); //, []

  return (
    <div className="background">
      <canvas id="webglCanvas" className="webgl"></canvas>
    </div>
  );
};

export default ThreeDBackground;