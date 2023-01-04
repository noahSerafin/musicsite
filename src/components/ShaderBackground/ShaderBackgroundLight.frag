#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
    //float normx(float input){
      //  float average = (u_resolution.x) / 2;
        //float range = (u_resolution.x) / 2;
        //float normalized_x = (input - average) / range; 
        //return normalized_x;
    //}
    vec2 mouse_norm = (u_mouse - (u_resolution / 2.0)) / (u_resolution / 2.0); //normalized between -1 and 1
    vec2 coord = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    float uDamp = 0.5;
    //coord.x += sin(u_time) + cos(u_time * 2.1);
    //coord.y += cos(u_time) + sin(u_time * 1.6);
    coord.x -= mouse_norm.x;// * uDamp;// - gl_FragCoord.x);
    coord.y -= mouse_norm.y;//abs(mouse_norm.x - gl_FragCoord.x);
    vec3 red = vec3(0.84, 0.14, 0.16);

    //color += 0.1 * (abs(sin(u_time)) + 0.1) / length(coord);
    red += (length(coord) * 0.3) / ((0.1) + (abs(sin(u_time)) * 0.5));

    gl_FragColor = vec4(red, 1.0);
   
}