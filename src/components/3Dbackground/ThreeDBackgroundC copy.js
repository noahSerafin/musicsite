import "./ThreeDBackground.scss";
import * as THREE from "three";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React, { useState, useEffect } from "react";

const ThreeDBackground = () => {  
  //var [currentPage, setCurrentPage] = useState();
  const scene = new THREE.Scene();
  //--------------------------------------------------------------------
    const VS = `
      // Copyright (c) 2011 Stefan Gustavson. All rights reserved.
      // Distributed under the MIT license. See LICENSE file.
      // Distributed under the MIT license. See LICENSE file.
      // https://github.com/ashima/webgl-noise
      //
    
      vec3 mod289(vec3 x)
      {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
    
      vec4 mod289(vec4 x)
      {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
    
      vec4 permute(vec4 x)
      {
        return mod289(((x*34.0)+1.0)*x);
      }
    
      vec4 taylorInvSqrt(vec4 r)
      {
        return 1.79284291400159 - 0.85373472095314 * r;
      }
    
      vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
      }
    
      // Classic Perlin noise
      float cnoise(vec3 P)
      {
        vec3 Pi0 = floor(P); // Integer part for indexing
        vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;
    
        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);
    
        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    
        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    
        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
    
        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;
    
        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);
    
        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
      }
    
      // Classic Perlin noise, periodic variant
      float pnoise(vec3 P, vec3 rep)
      {
        vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;
    
        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);
    
        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    
        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    
        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
    
        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;
    
        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);
    
        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 1.5 * n_xyz;
      }
    
      // Turbulence By Jaume Sanchez => https://codepen.io/spite/
    
      varying vec2 vUv;
      varying float noise;
      varying float qnoise;
      varying float displacement;
    
      uniform float time;
      uniform float pointscale;
      uniform float decay;
      uniform float complex;
      uniform float waves;
      uniform float eqcolor;
      uniform bool fragment;
    
      float turbulence( vec3 p) {
        float t = - 0.1;
        for (float f = 1.0 ; f <= 3.0 ; f++ ){
          float power = pow( 2.0, f );
          t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );
        }
        return t;
      }
    
      void main() {
    
        vUv = uv;
    
        noise = (1.0 *  - waves) * turbulence( decay * abs(normal + time));
        qnoise = (2.0 *  - eqcolor) * turbulence( decay * abs(normal + time));
        float b = pnoise( complex * (position) + vec3( 1.0 * time ), vec3( 100.0 ) );
    
        if (fragment == true) {
          displacement = - sin(noise) + normalize(b * 0.5);
        } else {
          displacement = - sin(noise) + cos(b * 0.5);
        }
    
        vec3 newPosition = (position) + (normal * displacement);
        gl_Position = (projectionMatrix * modelViewMatrix) * vec4( newPosition, 1.0 );
        gl_PointSize = (pointscale);
        //gl_ClipDistance[0];
    
      }
    `;
    
    const FS = `
      varying float qnoise;
    
      uniform float time;
      uniform bool redhell;
    
      void main() {
        float r, g, b;
      
    
        if (!redhell == true) {
          r = cos(qnoise + 0.5);
          g = cos(qnoise - 0.5);
          b = 0.0;
        } else {
          r = cos(qnoise + 0.5);
          g = cos(qnoise - 0.5);
          b = abs(qnoise);
        }
        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `;

    var mat = new THREE.ShaderMaterial({
      wireframe: false,
      //fog: true,
      uniforms: {
        time: {
          type: "f",
          value: 0.0,
        },
        pointscale: {
          type: "f",
          value: 0.0,
        },
        decay: {
          type: "f",
          value: 0.0,
        },
        complex: {
          type: "f",
          value: 0.0,
        },
        waves: {
          type: "f",
          value: 0.0,
        },
        eqcolor: {
          type: "f",
          value: 0.0,
        },
        fragment: {
          type: "i",
          value: true,
        },
        redhell: {
          type: "i",
          value: true,
        },
      },
      vertexShader: VS,
      fragmentShader: FS
    });
    
    var primitiveElement = function () {
      this.mesh = new THREE.Object3D();
      
      var geo = new THREE.IcosahedronBufferGeometry(3, 7);
      var mesh = new THREE.Mesh(geo, mat);
    
      //---
      this.mesh.add(mesh);
    };
    


    var _primitive;
    function createPrimitive() {
      _primitive = new primitiveElement();
      scene.add(_primitive.mesh);
    }
    //--------------------------------------------------------------------
    var options = {
      perlin: {
        vel: 0.002,
        speed: 0.0005,
        perlins: 1.0,
        decay: 0.1,
        complex: 0.3,
        waves: 20.0,
        eqcolor: 11.0,
        fragment: true,
        redhell: true,
      },
      spin: {
        sinVel: 0.0,
        ampVel: 80.0,
      },
    };

  useEffect(() => { 

    const canvas = document.querySelector("canvas.webgl");

    // Scene
    

    // Objects
 
    //const geometry = new THREE.TorusGeometry( .8, .3, 18, 100 );
    let g = new THREE.SphereGeometry(1, 24, 24);
    SphereToQuads(g);
    function SphereToQuads(g) {
        let p = g.parameters;
        let segmentsX = p.widthSegments;
        let segmentsY = p.heightSegments-2;
        let mainShift = segmentsX + 1;
        let indices = [];
        for (let i = 0; i < segmentsY + 1; i++) {
          let index11 = 0;
          let index12 = 0;
          for (let j = 0; j < segmentsX; j++) {
            index11 = (segmentsX + 1) * i + j;
            index12 = index11 + 1;
            let index21 = index11;
            let index22 = index11 + (segmentsX + 1);
            indices.push(index11 + mainShift, index12 + mainShift);
            if (index22 < ((segmentsX + 1) * (segmentsY + 1) - 1)) {
              indices.push(index21 + mainShift, index22 + mainShift);
            }
          }
          if ((index12 + segmentsX + 1) <= ((segmentsX + 1) * (segmentsY + 1) - 1)) {
            indices.push(index12 + mainShift, index12 + segmentsX + 1 + mainShift);
          }
        }
        
        let lastIdx = indices[indices.length - 1] + 2;
        
        // poles
        for(let i = 0; i < segmentsX; i++){
            //top
          indices.push(i, i + mainShift, i, i + mainShift + 1);
          
          // bottom
          let idx = lastIdx + i;
          let backShift = mainShift + 1;
          indices.push(idx, idx - backShift, idx, idx - backShift + 1);
        }
        
        g.setIndex(indices);
      }

    // Texture Loader
    //const loader = new THREE.TextureLoader()
    //const pic = loader.load('./circ.png')

    // Materials
    /*const shadowMaterial = new THREE.MeshPhongMaterial({
        color: 0x5b5b5b
      //transparent: false
    });*/

    const  material = new THREE.LineBasicMaterial({
        color: "rgb(109, 212, 213)"//,
        //wireframe: true
    });

    // Mesh
    const sphere = new THREE.LineSegments(g, material);
  
    sphere.position.z = 0;
    sphere.position.x = -0;
    sphere.position.y = -0.9;
    sphere.rotation.x = 90;
   

    scene.add(sphere)
    
    // Lights //
//

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight//-121,
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
    camera.position.y = 0;
    camera.position.z = 0.2;
    //camera.rotateX(-0.5);
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
   // const animateParticles = (event) => {
     // mouseY = event.clientY;
      //mouseX = event.clientX;
    //};

    //document.addEventListener("mousemove", animateParticles);
   // let mouseX = 0;
    //let mouseY = 0;

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

     var mrefreshinterval = 500; // update display every 500ms
     var lastmousex=-1; 
     var lastmousey=-1;
     var lastmousetime;
     var mousetravel = -1400;
     document.addEventListener("mousemove", function(e) {
         var mouseX = e.pageX;
         var mouseY = e.pageY;
         if (lastmousex > -1)
             mousetravel += Math.max( Math.abs(mouseX-lastmousex), Math.abs(mouseY-lastmousey) );
         lastmousex = mouseX;
         lastmousey = mouseY;


     });

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update objects

      /*if (mouseDown) {
        
      } else {
        sphere.rotation.y = 0.08 * elapsedTime;
      }*/
      sphere.rotation.y = elapsedTime * 0.08;
      //sphere.rotation.y = mousetravel *  0.00006;
      sphere.rotation.x = mousetravel * 0.0006;

      mat.uniforms["time"].value = options.perlin.speed;// * (Date.now() - start);
      mat.uniforms["pointscale"].value = options.perlin.perlins;
      mat.uniforms["decay"].value = options.perlin.decay;
      mat.uniforms["complex"].value = options.perlin.complex;
      mat.uniforms["waves"].value = options.perlin.waves;
      mat.uniforms["eqcolor"].value = options.perlin.eqcolor;
      mat.uniforms["fragment"].value = options.perlin.fragment;
      mat.uniforms["redhell"].value = options.perlin.redhell;

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