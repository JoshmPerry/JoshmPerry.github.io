const canvas = document.querySelector("#glcanvas");
  // Initialize the GL context
const gl = canvas.getContext("webgl");
main();

//
// start here
//
function main() {
  

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it.",
    );
    return;
  }

  
    var vertexShaderSource = document.querySelector("#vertex-shader-2d").text;
    var fragmentShaderSource = document.querySelector("#fragment-shader-2d").text;

    var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    var program = createProgram(gl,vertexShader,fragmentShader);

    var positionAttributeLocation=gl.getAttribLocation(program, "a_position");
    var colorUniformLocation = gl.getUniformLocation(program,"u_color");

    var positionBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    var positions=[
        0,0,
        0,0.5,
        0.7,0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(positions),gl.STATIC_DRAW);
    // Set clear color to black, fully opaque

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(program);
  gl.uniform4f(colorUniformLocation,Math.random(),Math.random(),Math.random(),1);
  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.vertexAttribPointer(positionAttributeLocation,2,gl.FLOAT,false,0,0);
    gl.drawArrays(gl.TRIANGLES,0,3);

}