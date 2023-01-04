#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

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

    vec2 st = gl_FragCoord.xy/u_resolution.xy;
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
    
    vec2 coord = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    float uDamp = 0.5;
    //coord.x += sin(u_time) + cos(u_time * 2.1);
    //coord.y += cos(u_time) + sin(u_time * 1.6);
    coord.x -= mouse_norm.x;// * uDamp;// - gl_FragCoord.x);
    coord.y -= mouse_norm.y;//abs(mouse_norm.x - gl_FragCoord.x);
    //vec3 red = vec3(0.84, 0.14, 0.16);

    //color += 0.1 * (abs(sin(u_time)) + 0.1) / length(coord);
    red += ((length(coord) * 0.3) / ((0.1) + ((sin(u_time))))) -1.;

    gl_FragColor = (vec4((red+1.0)-color,1.0));
   
}