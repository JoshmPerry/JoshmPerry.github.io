clickedIn=false;
sensitivity=0.01;
const scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(75,document.querySelector('#glcanvas').width/document.querySelector('#glcanvas').height,.1,1000);
camera.rotation.order="ZYX";

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#glcanvas'),
});
renderer.setSize(document.querySelector('#glcanvas').width,document.querySelector('#glcanvas').height);
renderer.setPixelRatio(window.devicePixelRatio);
camera.position.setZ(50);


loadScene(scene);




function clickCanvas(){
    if(document.pointerLockElement===document.querySelector('#glcanvas')){
        document.exitPointerLock();
    }else{
    document.querySelector('#glcanvas').requestPointerLock({
        unadjustedMovement: true,
      });
    }
}

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}



animate();




function logMovement(event) {
  if(clickedIn){
      //console.log("camera",camera.rotation.x/Math.PI,", ",camera.rotation.y/Math.PI);
  if(camera.rotation.x-event.movementY*sensitivity<Math.PI/2 && camera.rotation.x-event.movementY*sensitivity>-Math.PI/2)
  camera.rotation.x-=event.movementY*sensitivity;
  camera.rotation.y-=event.movementX*sensitivity;

  }
}


function logScroll(event){
  if(clickedIn){
      camera.position.x-=Math.sin(camera.rotation.y)*Math.cos(camera.rotation.x)*event.wheelDelta/5;
      camera.position.y+=Math.sin(camera.rotation.x)*event.wheelDelta/5;
      camera.position.z-=Math.cos(camera.rotation.y)*Math.cos(camera.rotation.x)*event.wheelDelta/5;
  }
}

document.addEventListener("mousemove", logMovement);

document.addEventListener("mousewheel", logScroll);

document.addEventListener("DOMMouseScroll", logScroll);

document.addEventListener("pointerlockchange", async () => {
  clickedIn=!clickedIn;
});

window.onresize=() =>{
  console.log("hi")
  document.querySelector("#glcanvas").setAttribute("width",(window.innerWidth) + "px");
  document.querySelector("#glcanvas").setAttribute("height",(window.innerHeight) + "px");
  renderer.setSize(document.querySelector('#glcanvas').width,document.querySelector('#glcanvas').height);
  camera.aspect=document.querySelector('#glcanvas').width/document.querySelector('#glcanvas').height;
  camera.updateProjectionMatrix();
}