import "./ThreeDBackground.scss";
import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";

//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React, { useState, useEffect } from "react";
import { BufferGeometry } from "three";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
let mouseX = 0;
let mouseY = 0;
const handleMousemove = event => {
  mouseY = event.clientY;
  mouseX = event.clientX;
  //console.log(mouseX);
};

let geometry = new THREE.SphereGeometry(1, 24, 24);
    
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
        return g;
      }

const SphereQuadGeometry = new BufferGeometry(SphereToQuads(geometry));
extend ({ SphereQuadGeometry });

const ThreeDBackground = () => { 
  //useFrame(({clock}) => );
  
  /*useEffect(() => {
    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
    });
    }, []);
    const tick = () => {
      //const elapsedTime = clock.getElapsedTime();

      //sphere.rotation.y = elapsedTime * 0.08;
      //sphere.rotation.x = mousetravel * 0.0006;

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };
  
    tick();
    */
 
  return (
    <Canvas color="black">
     <pointLight position={[10, 10, 10]}></pointLight>
     <line>
       <sphereQuadGeometry attach="geometry" />
       <lineBasicMaterial attach="material" color={"rgb(214, 35, 41)"} />
     </line>
   </Canvas>
  );
};

export default ThreeDBackground;