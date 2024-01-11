//import { mat2, mat2d, mat3, mat4, quat, quat2, vec2, vec3, vec4, } from "./index.js";

const canvas = document.querySelector("#glcanvas");
  // Initialize the GL context
const gl = canvas.getContext("webgl");

var program;
var positionAttributeLocation;
var colorUniformLocation;
var positionBuffer;
var modelRotation;
var viewRotation;
var translation;

var positions1=[
  0,0,1,
  0,0.5,1,
  0.7,0,1,
];

var pos1=[
  0,0,2,
  0,0.5,0,
  0.7,0,0,
];

var positions2=[
  0,-.5,1,
  0,0,1,
  0.7,-.5,1,
];
var positions=[positions1,positions2,pos1];

function createShader(gl,type,source){
  var shader = gl.createShader(type);
  gl.shaderSource(shader,source);
  gl.compileShader(shader);
  var success=gl.getShaderParameter(shader,gl.COMPILE_STATUS);
  if(success){
      return shader;
  }
  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}
function createProgram(gl, vertexShader, fragmentShader){
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program,fragmentShader);
  gl.linkProgram(program);
  var success=gl.getProgramParameter(program,gl.LINK_STATUS);
  if(success){
      return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

main();

//
// start here
//

function setup() {
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it.",
    );
    return;
  }
  var vertexShader = createShader(gl, gl.VERTEX_SHADER, 'attribute vec3 a_position; attribute mat3 uModelViewMatrix; void main(){gl_Position = (a_position*uModelViewMatrix).xy;}');
  //  var vertexShader = createShader(gl, gl.VERTEX_SHADER, 'attribute vec4 a_position; attribute mat4 uModelViewMatrix; attribute mat4 uProjectionMatrix; void main(){gl_Position = uProjectionMatrix*uModelViewMatrix*a_position;}');

  var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, 'precision mediump float; uniform vec4 u_color; void main(){ gl_FragColor = u_color; }');
  program = createProgram(gl,vertexShader,fragmentShader);
  positionAttributeLocation=gl.getAttribLocation(program, "a_position");
  modelRotation=gl.getUniformLocation(program, "uModelViewMatrix");
  //viewRotation=gl.getUniformLocation(program, "uProjectionMatrix");
  colorUniformLocation = gl.getUniformLocation(program,"u_color");
  //positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.useProgram(program);
  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.vertexAttribPointer(positionAttributeLocation,3,gl.FLOAT,false,0,0);
}


function main() {
  

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it.",
    );
    return;
  }

  
  setup();
  drawScene();
}

function drawScene(){
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  positions.forEach((element)=>
    drawShape(element)
  );
  
}

function drawShape(shape,rotation){
  const fieldOfView = (45 * Math.PI) / 180; // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = m3.identity();
  const projMatrix = m3.identity();
  //mat4.perspective(projMatrix, 1, 1, 1, 1);
  gl.uniformMatrix4fv(modelRotation,false,projectionMatrix);
  //gl.uniformMatrix4fv(viewRotation,false,projMatrix);
  gl.uniform4f(colorUniformLocation,Math.random(),Math.random(),Math.random(),1);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(shape),gl.STATIC_DRAW);
  gl.drawArrays(gl.TRIANGLES,0,3);
}