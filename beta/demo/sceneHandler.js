zoomed=false;
sensitivity=0.01;
const scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(75,document.querySelector('#glcanvas').width/document.querySelector('#glcanvas').height,.1,1000);
camera.rotation.order="ZYX";

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#glcanvas'),
});
renderer.setSize(document.querySelector('#glcanvas').width,document.querySelector('#glcanvas').height);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
    		renderer.shadowMap.type = THREE.BasicShadowMap;
camera.position.setZ(50);

var mesh=new THREE.Mesh(new THREE.TorusGeometry(10,5,16,100),new THREE.MeshStandardMaterial({color: 0xFF6347,}));
var box=new THREE.Mesh(new THREE.BoxGeometry(25,25,25),new THREE.MeshBasicMaterial({color: 0xFF6347,}));
var floor=new THREE.Mesh(new THREE.BoxGeometry(10000,1,10000),new THREE.MeshStandardMaterial({color: 0xFF6347,}));
var grid=new THREE.GridHelper();
box.position.set(50,0,0);
floor.position.set(0,-10,0);
//mesh.castShadow=true;
scene.add(
    mesh,grid,box,floor
    );
plight=new THREE.PointLight(0xffffff);
plight.intensity=10;
alight=new THREE.AmbientLight(0x101010);
alight.intensity=10;
plight.position.set(30,5,5);
scene.add(plight,alight,new THREE.PointLightHelper(plight));

function zoom(){
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
    mesh.rotation.x+=0.01;
    mesh.rotation.y+=0.05;
    mesh.rotation.z+=0.001;
    renderer.render(scene, camera);
}

animate();





document.querySelector('#glcanvas').addEventListener("click", async () => {
    
  });



  function logMovement(event) {
    if(zoomed){
        console.log("camera",camera.rotation.x,", ",camera.rotation.y);
    if(camera.rotation.x-event.movementY*sensitivity<Math.PI/2 && camera.rotation.x-event.movementY*sensitivity>-Math.PI/2)
    camera.rotation.x-=event.movementY*sensitivity;
    camera.rotation.y-=event.movementX*sensitivity;

    }
  }

  function relationalAngle(){
    diq = new Quaternion();
  }
  diq = new Quaternion();

  function logScroll(event){
    if(zoomed){
        camera.position.x-=Math.sin(camera.rotation.y)*Math.cos(camera.rotation.x)*event.wheelDelta/5;
        camera.position.y+=Math.cos(camera.rotation.y%(Math.PI/2))*Math.sin(camera.rotation.x)*event.wheelDelta/5;
        camera.position.z-=Math.cos(camera.rotation.y)*Math.cos(camera.rotation.x)*event.wheelDelta/5;
    }
  }
  
  document.addEventListener("mousemove", logMovement);

  document.addEventListener("mousewheel", logScroll);

  document.addEventListener("DOMMouseScroll", logScroll);

  document.addEventListener("pointerlockchange", async () => {
    zoomed=!zoomed;
  });

  window.onresize=() =>{
    console.log("hi")
    document.querySelector("#glcanvas").setAttribute("width",(window.innerWidth) + "px");
    document.querySelector("#glcanvas").setAttribute("height",(window.innerHeight) + "px");
    renderer.setSize(document.querySelector('#glcanvas').width,document.querySelector('#glcanvas').height);
    camera.aspect=document.querySelector('#glcanvas').width/document.querySelector('#glcanvas').height;
    camera.updateProjectionMatrix();
  }