import React, {useState, useEffect} from 'react';
import * as THREE from 'three';

			import Stats from 'three/examples/jsm/libs/stats.module.js';
			import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
			import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js';
			import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';
      //import { FragmentShader } from './ShaderBackground.frag';

			import "./ShaderBackground.scss"

const ShaderBackground = () => {

  const fs = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    varying vec2 vUv;
    //uniform sampler2D u_tex0;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

    float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                            -0.577350269189626,  // -1.0 + 2.0 * C.x
                            0.024390243902439); // 1.0 / 41.0
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i); // Avoid truncation effects in permutation
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));

        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }

    void main(){
      vec2 mouse_norm = (u_mouse - (u_resolution / 2.0)) / (u_resolution / 2.0); //normalized between -1 and 1

        vec2 st = vUv.xy/u_resolution.xy;
        st.x *= (u_resolution.x/u_resolution.y)*(0.5);//zoom
        vec3 color = vec3(0.0);
        vec2 pos = vec2(st*3.);

        float DF = 0.0;

        // Add a random position
        float a = 0.0;
        vec2 vel = vec2(u_time*.1) * (0.5 * mouse_norm);
        DF += snoise(pos+vel)*.25+.25;

        // Add a random position
        a = snoise(pos*vec2(cos(u_time*0.15),sin(u_time*0.1))*0.1)*3.1415;
        vel = vec2(cos(a),sin(a));
        DF += snoise(pos+vel)*.25+.25;

        //vec2 m = vec2(mouse_norm.x, mouse_norm.y);

        color = vec3( smoothstep(.7,.75,fract(DF)) );
        vec3 red = vec3(0.84, 0.14, 0.16);
        vec3 notred = vec3(0.16, 0.86, 0.84);
        //float normx(float input){
          //  float average = (u_resolution.x) / 2;
            //float range = (u_resolution.x) / 2;
            //float normalized_x = (input - average) / range; 
            //return normalized_x;
        //}
        
        vec2 coord = (vUv.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
        float uDamp = 0.5;
        //coord.x += sin(u_time) + cos(u_time * 2.1);
        //coord.y += cos(u_time) + sin(u_time * 1.6);
        coord.x -= mouse_norm.x;// * uDamp;// - vUv.x);
        coord.y -= mouse_norm.y;//abs(mouse_norm.x - vUv.x);
        //vec3 red = vec3(0.84, 0.14, 0.16);

        //color += 0.1 * (abs(sin(u_time)) + 0.1) / length(coord);
        red += ((length(coord) * 0.3) / ((0.1) + ((sin(u_time))))) -1.;

        gl_FragColor = (vec4((red+1.0)-color,1.0));
      
    }
  ` 
  const vs = `
      void main(){
        gl_Position = projectionMatrix
        * modelViewMatrix
        * vec4(position.x, position.y, position.z, 1.0);
      }
  `
  const vsPass = `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = projectionMatrix
    * modelViewMatrix
    * vec4(position.x, position.y, position.z, 1.0);
  }
`

  const fs2 = `
      void main(){
        gl_FragColor = vec4(1.0, 0, 0, 1.0);
      }
  `
 
  useEffect(() => { 
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    
    // Canvas
    const canvas = document.querySelector("canvas.webgl2");

    // Scene
    const scene = new THREE.Scene();

    // Objects
    //const geometry = new THREE.TorusGeometry( .8, .3, 18, 100 );
    const geometry = new THREE.PlaneGeometry(3.5, 2.5);   

    // Texture Loader
    //const loader = new THREE.TextureLoader()
    //const pic = loader.load('./circ.png')
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

    const clock = new THREE.Clock();

    // Materials
    const shadowMaterial = new THREE.MeshBasicMaterial({
        color: 0x5b5b5b
      //transparent: false
    });
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { type: "f", value: clock.elapsedTime},
        u_resolution: { type: "v2", value: new THREE.Vector2(sizes.width, sizes.height) },
        u_mouse: {type: "v2", value: new THREE.Vector2(mouseX, mouseY)}
      },
      vertexShader: vsPass,
      fragmentShader: fs2
    });
   

    // Mesh
    const sphere = new THREE.Mesh(geometry, shaderMaterial);
    
    //sphere.castShadow = true;
    //sphere.rotation.x = Math.PI / 2
    sphere.position.z = 0.5;
    //sphere.position.y = -0.01;

    scene.add(sphere);
    

    // Lights

    //const pointLight = new THREE.PointLight(0xffffff, 0.1);
    //pointLight.position.x = 2;
    //pointLight.position.y = 3;
    //pointLight.position.z = 4;
    //scene.add(pointLight);
    
    //extra Lights
    
    
    //scene.add( new THREE.CameraHelper(spotLight.shadow.camera));
    /**
     * Sizes
     */
    

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      newRenderer.setSize(sizes.width, sizes.height);
      newRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));      
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
    camera.position.z = 2;
    scene.add(camera);

    // Controls
    //const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    /**
     * Renderer
     */
    const newRenderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    newRenderer.setSize(sizes.width, sizes.height);
    newRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    newRenderer.setClearColor(new THREE.Color("#000"), 1);
    newRenderer.shadowMap.enabled = true;

    

    /**
     * Animate
     */

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update objects

      /*if (mouseDown) {
        sphere.rotation.y = mouseX * (elapsedTime * 0.00008);
        sphere.rotation.x = mouseY * (elapsedTime * 0.00008);
      } else {
        sphere.rotation.y = 0.00008 * elapsedTime;
      }*/
      // Render
      newRenderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }); //, []

  return (
    <div className="shader-background">
      <canvas id="webglCanvas" className="webgl2"></canvas>
    </div>
  );
}

export default ShaderBackground;