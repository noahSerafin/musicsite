import { useState } from 'react'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React, { useEffect } from "react";
import "./ThreeDBackground.scss";

//import vs from './shaders/tutorialvs3.glsl'
//import fs from './shaders/tutorialfs3.glsl'

const vs = `
// raw uniforms
// uniform mat4 projectionMatrix;
// uniform mat4 viewMatrix;
// uniform mat4 modelMatrix;

uniform float uTime;

uniform sampler2D noiseTex;
uniform float freq;
uniform vec2 iResolution;
uniform float uRadius;

uniform float freqRed;
uniform float freqGreen;
uniform float freqBlue;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying float vDisplacement;

#define PI 3.14159265

//	Classic Perlin 3D Noise 
//	by Stefan Gustavson
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float noise(vec3 P){
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
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

//bound values into anoter range
float fit(float unscaled, float originalMin, float originalMax, float minAllowed, float maxAllowed) {
  return (maxAllowed - minAllowed) * (unscaled - originalMin) / (originalMax - originalMin) + minAllowed;
}

/* 
* SMOOTH MOD
* - authored by @charstiles -
* based on https://math.stackexchange.com/questions/2491494/does-there-exist-a-smooth-approximation-of-x-bmod-y
* (axis) input axis to modify
* (amp) amplitude of each edge/tip
* (rad) radius of each edge/tip
* returns => smooth edges
*/

float smoothMod(float axis, float amp, float rad){
    float top = cos(PI * (axis / amp)) * sin(PI * (axis / amp));
    float bottom = pow(sin(PI * (axis / amp)), 2.0) + pow(rad, 2.0);
    float at = atan(top / bottom);
    return amp * (1.0 / 2.0) - (1.0 / PI) * at;
}

float wave(vec3 position){
    return fit(smoothMod(position.y * 15.0, 1.0, 1.5), 0.35, 0.6, 0.4, 1.0);
}

void main ()
{	
    vec3 coords = normal;
    coords.y += uTime * 0.1;
    vec3 noisePattern = vec3(noise(coords));
    float pattern = wave(noisePattern);

    //varyings
    vPosition = position;
    vNormal = normal;
    vUv = uv;
    vDisplacement = pattern;

    float displacement = vDisplacement / 3.0;
    //MVP
    vec3 newPosition = position + normal * displacement;
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0);
    vec4 projectedPosition = projectionMatrix* modelViewPosition;

    gl_Position = projectedPosition;
}
`
const fs = `
//rawShader uniforms
//uniform mat4 projectionMatrix;
//uniform mat4 viewMatrix;
//uniform mat4 modelMatrix;

//uniform mat4 gl_TextureMatrix;
//uniform vec4 gl_MultiTexCoord0;

uniform sampler2D noiseTex;
uniform float uTime;
uniform float uRadius;

uniform float freqRed;
uniform float freqGreen;
uniform float freqBlue;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying float vDisplacement;

void main ()
{	
    //gl_FragColor = vec4(vec3(vDisplacement), 1);
    vec3 noise = vec3(vDisplacement);
    
    gl_FragColor = vec4(abs(cos(noise.x*freqRed)), abs(sin(noise.x*freqGreen)), abs(cos((noise.x*freqBlue)+1000.0)), 1.0);

}
`


function ThreeDBackground() {
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
    //const geometry = new THREE.PlaneGeometry(1.5, 1, 32, 32)
    //const geometry = new THREE.BoxGeometry(0.6, 0.6, 0.6, 100, 100, 100)
    
    //const geometry = new THREE.SphereGeometry(0.6, 24, 24, 1.0, 0.18, 4.8, 0.3);
    const geometry = new THREE.IcosahedronGeometry(0.6, 120);
    

    //spikes-----------
    const count = geometry.attributes.position.count
    const randoms = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      randoms[i] = Math.random()
    }
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))
    console.log(geometry.attributes)
    //---------------
    
    //texture
    //const flagTexture = textureLoader.load('src/assets/polskacrop.jpg')
    const flagTexture = textureLoader.load('src/assets/noised.jpg')
   /* const [video] = useState(() => {
      const vid = document.createElement("video");
      vid.src = url;
      vid.crossOrigin = "Anonymous";
      vid.loop = true;
      vid.muted = true;
      vid.play();
      return vid;
    });
    const flagTexture = textureLoader.load('src/assets/fHeteroNoise.mp4')*/
    //-----

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }


    // Material
    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader: vs,
      fragmentShader: fs,
      //wireframe: true,
      side: THREE.DoubleSide,
      //tansparent: true
      //to use alpha
      uniforms: {
        freq: {
          value: 2.0
        },
        freqRed: {
          value: 1.0
        },
        freqGreen: {
          value: 1.0
        },
        freqBlue: {
          value: 1.0
        },
        uTime: {
          value: 0
        },
        iResolution: {
          value: new THREE.Vector2(sizes.width, sizes.height)
        },
        uColor: {
          value: new THREE.Color('orange')
        },
        uTexture: { value: flagTexture }
      }
    })
    //gui.add(material.uniforms.uFrequency.value, 'x').min(0).max(20).step(0.01).name(freqX)
    //gui.add(material.uniforms.uFrequency.value, 'y').min(0).max(20).step(0.01).name(freqY)

    const material = new THREE.MeshBasicMaterial({
      color: '#828282'
    })
    
    // Mesh
    //const mesh = new THREE.Mesh(geometry, material)
    
    const mesh = new THREE.Mesh(geometry, shaderMaterial)

    scene.add(mesh)
    
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
    camera.position.set(0.25, -0.25, 0.5)
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
    console.log(renderer.capabilities.isWebGL2)
    /**
     * Animate
     */
    const clock = new THREE.Clock()
    
    const tick = () =>
    {
        const elapsedTime = clock.getElapsedTime()
        //console.log(elapsedTime)
        //Noise.uniforms.uTime.value = elapsedTime
        shaderMaterial.uniforms.uTime.value = elapsedTime
        // Update controls
        controls.update()
    
        // Render
        //renderer.render(bufferScene, bufferCamera, bufferTexture);
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
}

export default ThreeDBackground;
